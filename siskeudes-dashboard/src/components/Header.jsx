import { MaterialSymbolsOutlined } from './MaterialSymbolsOutlined'

export default function Header() {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg">
      <div className="flex items-center gap-space-base">
        <div className="flex flex-col">
          <div className="flex items-center gap-space-xs">
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight">SISKEUDES DIGITAL</span>
            <span className="px-space-xs py-space-2xs rounded bg-surface-container-high font-label-sm text-label-sm text-on-primary-fixed-variant">PROD</span>
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Pemerintah Desa Sukamaju, Kec. Cisarua - TA 2024
          </span>
        </div>
        <div className="h-7 w-px bg-surface-container-high hidden lg:block"></div>
        <div className="hidden xl:flex items-center gap-space-sm">
          <div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-surface-container-low text-primary">
            <MaterialSymbolsOutlined icon="calendar_today" className="text-[18px]" />
            <span className="font-label-md text-label-md">T.A. 2024 - APBDes Perubahan</span>
          </div>
          <div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-secondary-container text-on-secondary-container">
            <MaterialSymbolsOutlined icon="check_circle" className="text-[16px]" />
            <span className="font-label-md text-label-md">Status: Disahkan (Perdes No. 04/2024)</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-space-md">
        <button className="relative p-space-sm rounded-lg hover:bg-surface-container text-on-surface-variant transition-colors flex items-center justify-center">
          <MaterialSymbolsOutlined icon="notifications" className="text-[20px]" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-error"></span>
        </button>
        <div className="h-7 w-px bg-surface-container-high"></div>
        <div className="flex items-center gap-space-sm pl-space-xs">
          <div className="text-right hidden sm:flex flex-col">
            <span className="font-label-md text-label-md text-on-surface leading-tight">Sri Rahayu, S.E.</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">
              Kaur Keuangan / Bendahara
            </span>
          </div>
          <img
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdBgPJKsdJhYauV9TomWntNCshHMK5iHgIB6vF3j-iVBz3oFAFhwFln95bDidZIzY41o_NFHX3XbjhO4xnAVNsgfADc1Odc3wZiRcp8_CwwTgMas3P6SvnknVSc3y-BLcXvdjLQjt8AeI-Opw5O8ttTgsfRKeVL7XZGPQm8Ea7tSTyxU3sFU0kaYlq658gHD1U1aiw_jFxpy8Oi4S460Hp55unQxe-qUi_JXxJ8YvCkf5U9nr_YRiu7Q"
          />
        </div>
      </div>
    </header>
  )
}
