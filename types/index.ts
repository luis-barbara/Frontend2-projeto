
// User type
export type UserRole = "user" | "admin"

export interface User {
    id: string
    name?: string
    email: string
    role: UserRole
    createdAt: string
}



// Project type (admin/user app)
export type Plan = "free" | "starter" | "pro" | "business"

export interface Project {
    id: string
    name: string
    description?: string
    plan: Plan
    createdAt: string
}




// KnowledgeItem type (artigos/FAQ que alimentam as respostas do chatbot)
export interface KnowledgeItem {
    id: string
    projectId: string
    title: string
    content: string
    tags?: string[]
    createdAt: string
    updatedAt?: string
}


// Conversation type (uma sessão de chat de um utilizador final)
export type ConversationStatus = "open" | "closed"

export interface Conversation {
    id: string
    projectId: string
    endUserId?: string
    createdAt: string
    lastMessageAt: string
    status: ConversationStatus
}


// Message type (mensagens user/bot dentro de uma conversa)
export type MessageRole = "user" | "bot" | "agent"
export type MessageIntent = "question" | "bug" | "suggestion"

export interface Message {
    id: string
    conversationId: string
    role: MessageRole
    content: string
    intent?: MessageIntent
    createdAt: string
}


// Ticket type (para backlog - bugs e sugestões)
export type TicketType = "bug" | "suggestion"
export type TicketStatus = "new" | "in_progress" | "resolved"
export type TicketPriority = "low" | "medium" | "high" 

export interface Ticket {
    id: string
    projectId: string
    type: TicketType
    title: string
    description?: string
    status: TicketStatus
    priority?: TicketPriority
    sourceConversationId?: string
    occurrences: number
    createdAt: string
    updatedAt?: string
}


// MonthlyUsage type (para controlar uso mensal do chatbot)
export interface MonthlyUsage {
    id?: string
    projectId: string
    month: string 
    messagesUsed: number
    messagesLimit: number
    plan: Plan
    updatedAt?: string
}



// DTO: API -> Frontend (send a chat message)
export interface ChatRequest {
    projectId: string
    conversationId?: string
    message: string
    endUserId?: string
}

// DTO: Frontend -> API (chat message)
export interface ChatResponse {
    conversationId: string
    reply: Message
    intent?: MessageIntent
    ticketCreated?: { id: string; type: TicketType }
}

// DTO: API -> Frontend (create ticket manually)
export interface CreateTicketRequest {
    projectId: string
    type: TicketType
    title: string
    description?: string
    sourceConversationId?: string
}

// DTO: Frontend -> API (patch ticket fields)
export interface UpdateTicketRequest {
    status?: TicketStatus
    title?: string
    description?: string
    priority?: TicketPriority
}