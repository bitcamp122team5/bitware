package com.bitgroupware.chat.controller;

import static java.lang.String.format;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bitgroupware.chat.Beans.ChatMessageDto;
import com.bitgroupware.chat.Beans.ChatMessageDto.MessageType;
import com.bitgroupware.chat.Beans.DepartmentDto;
import com.bitgroupware.chat.Beans.MemberDto;
import com.bitgroupware.chat.service.ChatService;
import com.bitgroupware.security.config.SecurityUser;

@Controller
@RequestMapping("/user")
public class ChatController {
	private static final Logger logger = LoggerFactory.getLogger(WebSocketEventListener.class);

	@Autowired
	private SimpMessageSendingOperations messagingTemplate;

	@Autowired
	ChatService chatservice;

	@MessageMapping("/chat/{roomId}/sendMessage")
	public void addUser(@DestinationVariable String roomId, @Payload ChatMessageDto chatMessage,
			SimpMessageHeaderAccessor headerAccessor) {
		String currentRoomId = (String) headerAccessor.getSessionAttributes().put("room_id", roomId);
		if (currentRoomId == null) {
			ChatMessageDto leaveMessage = new ChatMessageDto();
			leaveMessage.setMessageType(MessageType.LEAVE);
			leaveMessage.setSender(chatMessage.getSender());
			messagingTemplate.convertAndSend(format("/channel/%s", currentRoomId), leaveMessage);
		}
		headerAccessor.getSessionAttributes().put("username", chatMessage.getSender());
		messagingTemplate.convertAndSend(format("/channel/%s", roomId), chatMessage);
	}

	/* chat 메인 페이지로 이동 */
	@RequestMapping("/chat")
	public String chatView(String memId, @AuthenticationPrincipal SecurityUser principal, Model model) {
		String sessionId = principal.getMember().getMemId();
		String sessionName = principal.getMember().getMemName();

		MemberDto memDto = chatservice.selectMemeberInfo(memId);
		model.addAttribute("memDto", memDto);
		
		model.addAttribute("sessionId", sessionId);
		model.addAttribute("sessionName", sessionName);
		model.addAttribute("memId", memId);
		
		System.out.println(sessionId);
		System.out.println(memId);
		
		String[] roomArray = {sessionId, memId};
		Arrays.sort(roomArray, Collections.reverseOrder());
		
		String roomId = Arrays.stream(roomArray).collect(Collectors.joining());
		
		System.out.println("rooId =" + roomId);
		model.addAttribute("roomId", roomId);

		return "chat/chat";
	}

	@RequestMapping("/chatList")
	//@ResponseBody
	public String chatList(Model model, MemberDto memberDto, DepartmentDto depDto, ChatMessageDto chatDto, @AuthenticationPrincipal SecurityUser principal) {
		System.out.println("컨트롤러 진입");
		List<MemberDto> memberList = chatservice.selectMemberList(memberDto);
		List<DepartmentDto> depList = chatservice.selectDeptList(depDto);

		String sessionName = principal.getMember().getMemName();
		//chatDto = chatservice.selectLastContentList(receiver);
		List<ChatMessageDto> lastContentList = chatservice.selectLastContentList(chatDto);
		for(ChatMessageDto dto : lastContentList) {
			System.out.println(dto);
		}
		//model.addAttribute("sessionId", sessionId);
		model.addAttribute("sessionName", sessionName);
		
		model.addAttribute("memberList", memberList);
		model.addAttribute("depList", depList);
		model.addAttribute("chatDto", chatDto);
		model.addAttribute("lastContentList", lastContentList);
		return "chat/chatList :: chatFragment";
	}

	@RequestMapping("/insertChat")
	@ResponseBody
	public void insertChat(String content, String sender, String receiver, String roomId) {
		System.out.println("content is "+content);
		System.out.println("sender is "+sender);
		System.out.println("reciver is "+receiver);
		System.out.println("roomId is "+roomId);
		
		ChatMessageDto chatDto = new ChatMessageDto();
		chatDto.setContent(content);
		chatDto.setSender(sender);
		chatDto.setReceiver(receiver);
		chatDto.setRoomId(roomId);
		chatservice.insertChat(chatDto);


	}
	
	@RequestMapping("/chatDepartmentListAjax")
	@ResponseBody
	public List<DepartmentDto> chatAjaxList() {
		 List<DepartmentDto> departmentList = chatservice.selectDepartureList();
		return departmentList;
	}

	@RequestMapping("/chatMemberListByDepartmentAjax")
	@ResponseBody
	public List<MemberDto> chatMemberListByDepartmentAjax(String deptName) {
		System.out.println(deptName);
		List<MemberDto> memberList = chatservice.selectMemberListByDepartmentAjax(deptName);
		return memberList;
	}
}
