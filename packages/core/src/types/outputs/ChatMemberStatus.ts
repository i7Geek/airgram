import { ChatPermissions } from './index'

/** Provides information about the status of a member in a chat */
export type ChatMemberStatusUnion = ChatMemberStatusCreator
  | ChatMemberStatusAdministrator
  | ChatMemberStatusMember
  | ChatMemberStatusRestricted
  | ChatMemberStatusLeft
  | ChatMemberStatusBanned

/** The user is the owner of a chat and has all the administrator privileges */
export interface ChatMemberStatusCreator {
  _: 'chatMemberStatusCreator'
  /**
   * A custom title of the owner; 0-16 characters without emojis; applicable to supergroups
   * only
   */
  customTitle: string
  /** True, if the user is a member of the chat */
  isMember: boolean
}

/**
 * The user is a member of a chat and has some additional privileges. In basic groups,
 * administrators can edit and delete messages sent by others, add new members, and
 * ban unprivileged members. In supergroups and channels, there are more detailed options
 * for administrator privileges
 */
export interface ChatMemberStatusAdministrator {
  _: 'chatMemberStatusAdministrator'
  /**
   * A custom title of the administrator; 0-16 characters without emojis; applicable to
   * supergroups only
   */
  customTitle: string
  /** True, if the current user can edit the administrator privileges for the called user */
  canBeEdited: boolean
  /** True, if the administrator can change the chat title, photo, and other settings */
  canChangeInfo: boolean
  /** True, if the administrator can create channel posts; applicable to channels only */
  canPostMessages: boolean
  /**
   * True, if the administrator can edit messages of other users and pin messages; applicable
   * to channels only
   */
  canEditMessages: boolean
  /** True, if the administrator can delete messages of other users */
  canDeleteMessages: boolean
  /** True, if the administrator can invite new users to the chat */
  canInviteUsers: boolean
  /** True, if the administrator can restrict, ban, or unban chat members */
  canRestrictMembers: boolean
  /** True, if the administrator can pin messages; applicable to groups only */
  canPinMessages: boolean
  /**
   * True, if the administrator can add new administrators with a subset of their own
   * privileges or demote administrators that were directly or indirectly promoted by
   * them
   */
  canPromoteMembers: boolean
}

/** The user is a member of a chat, without any additional privileges or restrictions */
export interface ChatMemberStatusMember {
  _: 'chatMemberStatusMember'
}

/**
 * The user is under certain restrictions in the chat. Not supported in basic groups
 * and channels
 */
export interface ChatMemberStatusRestricted {
  _: 'chatMemberStatusRestricted'
  /** True, if the user is a member of the chat */
  isMember: boolean
  /**
   * Point in time (Unix timestamp) when restrictions will be lifted from the user; 0
   * if never. If the user is restricted for more than 366 days or for less than 30 seconds
   * from the current time, the user is considered to be restricted forever
   */
  restrictedUntilDate: number
  /** User permissions in the chat */
  permissions: ChatPermissions
}

/** The user is not a chat member */
export interface ChatMemberStatusLeft {
  _: 'chatMemberStatusLeft'
}

/**
 * The user was banned (and hence is not a member of the chat). Implies the user can't
 * return to the chat or view messages
 */
export interface ChatMemberStatusBanned {
  _: 'chatMemberStatusBanned'
  /**
   * Point in time (Unix timestamp) when the user will be unbanned; 0 if never. If the
   * user is banned for more than 366 days or for less than 30 seconds from the current
   * time, the user is considered to be banned forever
   */
  bannedUntilDate: number
}
