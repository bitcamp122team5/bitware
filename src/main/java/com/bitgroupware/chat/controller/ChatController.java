package com.bitgroupware.chat.controller;

import static java.lang.String.format;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpSession;

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

import com.bitgroupware.chat.Beans.ChatAlertDto;
import com.bitgroupware.chat.Beans.ChatMessageDto;
import com.bitgroupware.chat.Beans.ChatMessageDto.MessageType;
import com.bitgroupware.chat.Beans.DepartmentDto;
import com.bitgroupware.chat.Beans.MemberDto;
import com.bitgroupware.chat.service.ChatService;
import com.bitgroupware.chat.utils.TemporaryInteger;
import com.bitgroupware.chat.utils.TemporaryList;
import com.bitgroupware.security.config.SecurityUser;

@Controller
@RequestMapping("/user")
public class ChatController {

	@Autowired
	private SimpMessageSendingOperations messagingTemplate;

	@Autowired
	private ChatService chatservice;

	@MessageMapping("/chat/{roomId}/sendMessage")
	public void addUser(@DestinationVariable String roomId, @Payload ChatMessageDto chatMessage, SimpMessageHeaderAccessor headerAccessor) {
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
	public String chatView(String memId, @AuthenticationPrincipal SecurityUser principal, Model model, HttpSession session, ChatMessageDto chatMessageDto) {

		String sessionId = principal.getMember().getMemId();
		String sessionName = principal.getMember().getMemName();

		session.setAttribute("memId", memId);
		MemberDto memDto = chatservice.selectMemeberInfo(memId);
		
		model.addAttribute("memId", memId);
		model.addAttribute("memDto", memDto);
		
		model.addAttribute("sessionId", sessionId);
		model.addAttribute("sessionName", sessionName);
		
		String[] roomArray = {sessionId, memId};
		Arrays.sort(roomArray, Collections.reverseOrder());
		
		String roomId = Arrays.stream(roomArray).collect(Collectors.joining());
		
		model.addAttribute("roomId", roomId);
		
		chatservice.insertChatAlert(sessionId, memId, roomId);
		System.out.println("여기여기");
		return "chat/chat";
	}

	@RequestMapping("/chatList")
	@ResponseBody
	public String chatList(Model model, MemberDto memberDto, DepartmentDto depDto, ChatMessageDto chatDto, String sender, @AuthenticationPrincipal SecurityUser principal) {
		
		List<MemberDto> memberList = chatservice.selectMemberList(memberDto);
		List<DepartmentDto> depList = chatservice.selectDeptList(depDto);

		String sessionName = principal.getMember().getMemName();
		
		model.addAttribute("sessionName", sessionName);
		model.addAttribute("memberList", memberList);
		model.addAttribute("depList", depList);
		model.addAttribute("chatDto", chatDto);
		
		return "chat/chatList :: chatFragment";
	}

	@RequestMapping("/insertChat")
	@ResponseBody
	public void insertChat(String content, String sender, String receiver, String roomId) {
		
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
	public List<TemporaryList> chatMemberListByDepartmentAjax(String deptName, @AuthenticationPrincipal SecurityUser principal) {
		List<MemberDto> memberList = chatservice.selectMemberListByDepartmentAjax(deptName);
		String sessionId = principal.getMember().getMemId();
		List<TemporaryList> lists = new ArrayList<TemporaryList>();
		for(MemberDto member : memberList) {
			String memId = member.getMemId();
			String[] roomArray = {sessionId, memId};
			Arrays.sort(roomArray, Collections.reverseOrder());
			String roomId = Arrays.stream(roomArray).collect(Collectors.joining());
			String content = chatservice.selectChatMessageListByRoomId(roomId);
			if(content!=null&&content.length()>10) {
				content = content.substring(0, 8)+"...";
			}
			TemporaryList list = new TemporaryList();
			list.setMember(member);
			list.setContent(content);
			lists.add(list);
		}
		return lists;
	}

	@RequestMapping("/selectChatListAjax")
	@ResponseBody
	public List<ChatMessageDto> selectChatListAjax(String roomId) {
		List<ChatMessageDto> chatMessageList = chatservice.selectChatMessageList(roomId);
		TemporaryInteger.counting=chatMessageList.size();
		return chatMessageList;
	}
	@RequestMapping("/selectChatListAjax2")
	@ResponseBody
	public ChatMessageDto selectChatListAjax2(String roomId) {
		List<ChatMessageDto> chatMessageList = chatservice.selectChatMessageList(roomId);
		if(chatMessageList.size()>TemporaryInteger.counting) {
			TemporaryInteger.counting=chatMessageList.size();
			ChatMessageDto chatMessage = chatMessageList.get(chatMessageList.size()-1);
			return chatMessage;
		}else {
			ChatMessageDto chatMessage = new ChatMessageDto();
			return chatMessage;
		}
	}
	
	@RequestMapping("/checkChatAlert")
	@ResponseBody
	public String checkChatAlert(@AuthenticationPrincipal SecurityUser principal) {
		String receiver = principal.getMember().getMemId();
		List<ChatAlertDto> chatAlertList = chatservice.checkChatAlert(receiver);
		String str = "";
		if(chatAlertList.size()!=0) {
			for(ChatAlertDto chatAlert : chatAlertList) {
				chatservice.deleteChatAlert(chatAlert.getAlertNo());
				str += chatAlert.getSender()+" ";
			}
			return str+"님이 채팅방에 입장하였습니다.";
		}else {
			return "";
		}
	}
}
