import { 
  SearchIcon as SearchIconLucide,
  PlayCircleIcon as PlayCircleIconLucide,
  StopCircleIcon as StopCircleIconLucide,
  Trash2Icon as Trash2IconLucide,
  AlignJustifyIcon as AlignJustifyIconLucide,
  PlusCircleIcon as PlusCircleIconLucide,
  PencilIcon as PencilIconLucide,
  CheckCircle2Icon as CheckCircleIconLucide,
  LoaderCircleIcon as LoaderCircleIconLucide,
  ChevronsDownIcon as ChevronDownIconLucide
 } from 'lucide-react'

export function SearchIcon() {
  return <SearchIconLucide className='text-sky-600 hover:text-sky-500'/>
}

export function PlayCircleIcon() {
  return <PlayCircleIconLucide className='text-sky-600 hover:text-sky-500 fill-slate-200'/>
}

export function StopCircleIcon() {
  return <StopCircleIconLucide className='text-rose-600 hover:text-rose-500 fill-slate-200'/>
}

export function Trash2Icon() {
  return <Trash2IconLucide className="text-rose-600 hover:text-rose-500" aria-description='trash icon'/>
}

export function AlignJustifyIcon() {
  return <AlignJustifyIconLucide className='text-sky-600 hover:text-sky-500'/>
}

export function PlusCircleIcon() {
  return <PlusCircleIconLucide className='text-sky-600 hover:text-sky-500 fill-slate-200'/>
}

export function PencilIcon() {
  return <PencilIconLucide className='text-sky-600 hover:text-sky-500'/>
}

export function CheckIcon() {
  return <CheckCircleIconLucide className='text-sky-600 fill-slate-200'/>
}

export function LoaderIcon() {
  return <LoaderCircleIconLucide className='text-sky-600 animate-spin'/>
}

export function ChevronDownIcon() {
  return <ChevronDownIconLucide className='text-sky-600 hover:text-sky-500'/>
}