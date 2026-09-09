import { MaterialSymbolsOutlined } from './MaterialSymbolsOutlined'

const menuItems = [
  { section: 'Ringkasan', items: [{ icon: 'dashboard', label: 'Dashboard Eksekutif', active: true }] },
  {
    section: 'Perencanaan & Anggaran',
    items: [
      { icon: 'account_balance_wallet', label: 'Matriks & Versi APBDes', active: false },
      { icon: 'event_note', label: 'RKPDesa 2024', active: false },
    ],
  },
  {
    section: 'Penatausahaan Keuangan',
    items: [
      { icon: 'payments', label: 'Kas & SPP / SP2D', active: false },
      { icon: 'menu_book', label: 'Buku Kas Umum (BKU)', active: false },
      { icon: 'receipt_long', label: 'Pajak & Potongan PPh/PPn', active: false },
    ],
  },
  {
    section: 'Pengawasan & Proyek',
    items: [
      { icon: 'foundation', label: 'Monitoring Fisik & Proyek', active: false },
      { icon: 'inventory_2', label: 'Aset & Inventaris Desa', active: false },
    ],
  },
  {
    section: 'Transparansi & Laporan',
    items: [
      { icon: 'analytics', label: 'LRA & Akuntansi CaLK', active: false },
      { icon: 'public', label: 'Portal Publik Warga', active: false },
    ],
  },
]

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between overflow-y-auto">
      <div className="flex flex-col">
        <div className="h-16 px-space-base flex items-center gap-space-sm bg-surface-container-lowest">
          <div className="w-9 h-9 rounded bg-primary-container flex items-center justify-center text-on-primary font-headline-sm text-headline-sm">
            <MaterialSymbolsOutlined icon="account_balance" className="text-[20px]" />
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight">SISKEUDES</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">Sistem Tata Kelola Keuangan</span>
          </div>
        </div>
        <div className="px-space-base py-space-sm">
          <div className="bg-surface-container-low rounded-lg p-space-sm flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-on-surface-variant">Tahun Anggaran</span>
              <span className="font-label-md text-label-md text-primary">2024 - Perubahan</span>
            </div>
            <MaterialSymbolsOutlined icon="verified" className="text-on-surface-variant text-[18px]" />
          </div>
        </div>
        <nav className="flex flex-col px-space-sm py-space-xs gap-space-2xs">
          {menuItems.map((group, gi) => (
            <div key={gi}>
              <div className="px-space-sm pt-space-sm pb-space-xs font-label-sm text-label-sm uppercase tracking-wider text-outline">
                {group.section}
              </div>
              {group.items.map((item, ii) => (
                <a
                  key={ii}
                  aria-current={item.active ? 'page' : undefined}
                  className={`flex items-center gap-space-sm px-space-sm py-ledger-cell-padding-y transition-colors rounded-lg font-body-md text-body-md ${
                    item.active
                      ? 'bg-primary-container text-on-primary font-semibold'
                      : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                  }`}
                  href="#"
                >
                  <MaterialSymbolsOutlined icon={item.icon} className="text-[18px]" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          ))}
        </nav>
      </div>
      <div className="p-space-base bg-surface-container-low m-space-sm rounded-lg flex flex-col gap-space-xs">
        <div className="flex items-center gap-space-xs text-secondary">
          <MaterialSymbolsOutlined icon="lock" className="text-[16px]" />
          <span className="font-label-sm text-label-sm font-semibold uppercase">Audit Ready</span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
          SISKEUDES V.2.06 Terintegrasi Kemendagri &amp; BPKP
        </p>
      </div>
    </aside>
  )
}
