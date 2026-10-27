/**
 * Icon set for HSK Path, built on Phosphor Icons (phosphoricons.com).
 * Components keep the names used across the codebase so call sites stay unchanged.
 * A className containing `fill-` switches the icon to Phosphor's filled weight.
 */
import React, { forwardRef } from 'react';
import type { Icon as PhosphorIcon, IconProps } from '@phosphor-icons/react';
import {
  HandWaving as PhHandWaving,
  HandsPraying as PhHandsPraying,
  BowlFood as PhBowlFood,
  ShoppingBag as PhShoppingBag,
  Train as PhTrain,
  DeviceMobile as PhDeviceMobile,
  Pill as PhPill,
  House as PhHouse,
  ChatCircleText as PhChatCircleText,
  Siren as PhSiren,
  ChatsCircle as PhChatsCircle,
  ArrowClockwise as PhArrowClockwise,
  ArrowCounterClockwise as PhArrowCounterClockwise,
  ArrowLeft as PhArrowLeft,
  ArrowRight as PhArrowRight,
  ArrowSquareOut as PhArrowSquareOut,
  ArrowUpRight as PhArrowUpRight,
  ArrowsClockwise as PhArrowsClockwise,
  Bell as PhBell,
  BookOpenText as PhBookOpenText,
  CalendarBlank as PhCalendarBlank,
  CaretDown as PhCaretDown,
  CaretLeft as PhCaretLeft,
  CaretRight as PhCaretRight,
  CaretUp as PhCaretUp,
  ChatText as PhChatText,
  Check as PhCheck,
  CheckCircle as PhCheckCircle,
  Clock as PhClock,
  Copy as PhCopy,
  Crown as PhCrown,
  EnvelopeSimple as PhEnvelopeSimple,
  Exam as PhExam,
  Eye as PhEye,
  EyeSlash as PhEyeSlash,
  FileText as PhFileText,
  Fire as PhFire,
  FloppyDisk as PhFloppyDisk,
  Funnel as PhFunnel,
  GearSix as PhGearSix,
  Globe as PhGlobe,
  GraduationCap as PhGraduationCap,
  Headphones as PhHeadphones,
  Info as PhInfo,
  Lightbulb as PhLightbulb,
  List as PhList,
  ListChecks as PhListChecks,
  LockSimple as PhLockSimple,
  MagnifyingGlass as PhMagnifyingGlass,
  Medal as PhMedal,
  Newspaper as PhNewspaper,
  PaperPlaneTilt as PhPaperPlaneTilt,
  PenNib as PhPenNib,
  Play as PhPlay,
  PlayCircle as PhPlayCircle,
  Pulse as PhPulse,
  Question as PhQuestion,
  Repeat as PhRepeat,
  SealCheck as PhSealCheck,
  Shield as PhShield,
  ShieldCheck as PhShieldCheck,
  SignOut as PhSignOut,
  SpeakerHigh as PhSpeakerHigh,
  SpeakerSlash as PhSpeakerSlash,
  SquaresFour as PhSquaresFour,
  Stack as PhStack,
  Star as PhStar,
  Target as PhTarget,
  Timer as PhTimer,
  TrendUp as PhTrendUp,
  Trophy as PhTrophy,
  User as PhUser,
  Users as PhUsers,
  Warning as PhWarning,
  WarningCircle as PhWarningCircle,
  X as PhX,
  DownloadSimple as PhDownloadSimple,
  Export as PhExport,
  XCircle as PhXCircle,
} from '@phosphor-icons/react';

export type AppIconProps = IconProps & { strokeWidth?: number | string };

function make(Base: PhosphorIcon, name: string) {
  const C = forwardRef<SVGSVGElement, AppIconProps>(({ className = '', weight, size = 24, strokeWidth: _sw, ...rest }, ref) => (
    <Base
      ref={ref}
      size={size}
      className={className}
      weight={weight ?? (/(^|\s)fill-/.test(className) ? 'fill' : 'regular')}
      aria-hidden={rest['aria-label'] ? undefined : true}
      {...rest}
    />
  ));
  C.displayName = name;
  return C;
}

export const Sparkles = make(PhListChecks, 'Sparkles');
export const CheckCircle2 = make(PhCheckCircle, 'CheckCircle2');
export const BookOpen = make(PhBookOpenText, 'BookOpen');
export const ArrowRight = make(PhArrowRight, 'ArrowRight');
export const Layers = make(PhStack, 'Layers');
export const Award = make(PhMedal, 'Award');
export const Clock = make(PhClock, 'Clock');
export const Volume2 = make(PhSpeakerHigh, 'Volume2');
export const VolumeX = make(PhSpeakerSlash, 'VolumeX');
export const ChevronRight = make(PhCaretRight, 'ChevronRight');
export const ChevronLeft = make(PhCaretLeft, 'ChevronLeft');
export const ChevronDown = make(PhCaretDown, 'ChevronDown');
export const ChevronUp = make(PhCaretUp, 'ChevronUp');
export const ShieldCheck = make(PhShieldCheck, 'ShieldCheck');
export const Shield = make(PhShield, 'Shield');
export const Headphones = make(PhHeadphones, 'Headphones');
export const FileText = make(PhFileText, 'FileText');
export const XCircle = make(PhXCircle, 'XCircle');
export const HelpCircle = make(PhQuestion, 'HelpCircle');
export const ArrowLeft = make(PhArrowLeft, 'ArrowLeft');
export const PenTool = make(PhPenNib, 'PenTool');
export const Flame = make(PhFire, 'Flame');
export const X = make(PhX, 'X');
export const DownloadSimple = make(PhDownloadSimple, 'DownloadSimple');
export const ShareIos = make(PhExport, 'ShareIos');
export const TrendingUp = make(PhTrendUp, 'TrendingUp');
export const Eye = make(PhEye, 'Eye');
export const EyeOff = make(PhEyeSlash, 'EyeOff');
export const Lock = make(PhLockSimple, 'Lock');
export const RotateCcw = make(PhArrowCounterClockwise, 'RotateCcw');
export const RotateCw = make(PhArrowClockwise, 'RotateCw');
export const RefreshCw = make(PhArrowsClockwise, 'RefreshCw');
export const Search = make(PhMagnifyingGlass, 'Search');
export const AlertCircle = make(PhWarningCircle, 'AlertCircle');
export const AlertTriangle = make(PhWarning, 'AlertTriangle');
export const Star = make(PhStar, 'Star');
export const Zap = make(PhPlay, 'Zap');
export const Check = make(PhCheck, 'Check');
export const Calendar = make(PhCalendarBlank, 'Calendar');
export const Globe = make(PhGlobe, 'Globe');
export const FileCheck = make(PhExam, 'FileCheck');
export const User = make(PhUser, 'User');
export const Mail = make(PhEnvelopeSimple, 'Mail');
export const Target = make(PhTarget, 'Target');
export const BrainCircuit = make(PhRepeat, 'BrainCircuit');
export const Brain = make(PhRepeat, 'Brain');
export const Lightbulb = make(PhLightbulb, 'Lightbulb');
export const Crown = make(PhCrown, 'Crown');
export const LayoutDashboard = make(PhSquaresFour, 'LayoutDashboard');
export const GraduationCap = make(PhGraduationCap, 'GraduationCap');
export const Filter = make(PhFunnel, 'Filter');
export const Compass = make(PhNewspaper, 'Compass');
export const ExternalLink = make(PhArrowSquareOut, 'ExternalLink');
export const Copy = make(PhCopy, 'Copy');
export const MessageSquare = make(PhChatText, 'MessageSquare');
export const Info = make(PhInfo, 'Info');
export const Settings = make(PhGearSix, 'Settings');
export const Bell = make(PhBell, 'Bell');
export const Save = make(PhFloppyDisk, 'Save');
export const Send = make(PhPaperPlaneTilt, 'Send');
export const Users = make(PhUsers, 'Users');
export const Activity = make(PhPulse, 'Activity');
export const Trophy = make(PhTrophy, 'Trophy');
export const Menu = make(PhList, 'Menu');
export const LogOut = make(PhSignOut, 'LogOut');
export const Play = make(PhPlay, 'Play');
export const PlayCircle = make(PhPlayCircle, 'PlayCircle');
export const Timer = make(PhTimer, 'Timer');
export const ArrowUpRight = make(PhArrowUpRight, 'ArrowUpRight');
export const SealCheck = make(PhSealCheck, 'SealCheck');
export const PenNib = make(PhPenNib, 'PenNib');
export const Newspaper = make(PhNewspaper, 'Newspaper');
export const Repeat = make(PhRepeat, 'Repeat');
export const HandWaving = make(PhHandWaving, 'HandWaving');
export const HandsPraying = make(PhHandsPraying, 'HandsPraying');
export const BowlFood = make(PhBowlFood, 'BowlFood');
export const ShoppingBag = make(PhShoppingBag, 'ShoppingBag');
export const Train = make(PhTrain, 'Train');
export const DeviceMobile = make(PhDeviceMobile, 'DeviceMobile');
export const Pill = make(PhPill, 'Pill');
export const House = make(PhHouse, 'House');
export const ChatCircleText = make(PhChatCircleText, 'ChatCircleText');
export const Siren = make(PhSiren, 'Siren');
export const ChatsCircle = make(PhChatsCircle, 'ChatsCircle');
