import { MaterialSymbolsOutlined } from './MaterialSymbolsOutlined'

const kpiData = [
  {
    title: 'Total Pagu APBDes TA 2024',
    badge: 'Perubahan',
    badgeColor: 'bg-surface-container-high text-on-primary-fixed-variant',
    accentColor: 'bg-primary',
    labelPrefix: 'Rp',
    value: '2.450.800.000',
    valueColor: 'text-primary',
    details: [
      { label: 'Pendapatan Rencana:', value: 'Rp 2.450.800.000', highlight: 'text-primary' },
      { label: 'Pagu Belanja:', value: 'Rp 2.410.500.000', highlight: 'text-on-surface' },
      { label: 'Surplus Anggaran:', value: '+Rp 40.300.000', highlight: 'text-secondary', bold: true },
    ],
    hasCard: true,
  },
  {
    title: 'Realisasi Belanja Desa',
    badge: '70.0% Terserap',
    badgeColor: 'bg-secondary-container text-on-secondary-container',
    accentColor: 'bg-secondary',
    labelPrefix: 'Rp',
    value: '1.687.350.000',
    valueColor: 'text-secondary',
    target: 'Target Q3: 75.0%',
    sisa: 'Sisa Pagu: Rp 723.150.000',
    progress: [
      { width: '58%', color: 'bg-secondary', label: 'Cair: 58%', title: 'SP2D Definitif (58%)' },
      { width: '12%', color: 'bg-surface-tint', label: 'SPP Valid: 12%', title: 'SPP Dalam Proses (12%)' },
    ],
    remaining: 'Sisa: 30%',
    remainingColor: 'text-error',
  },
  {
    title: 'Posisi Kas & Bank BKU',
    badge: null,
    badgeColor: null,
    accentColor: 'bg-surface-tint',
    labelPrefix: 'Rp',
    value: '763.450.000',
    valueColor: 'text-primary',
    accounts: [
      { icon: 'payments', label: 'Kas Tunai Bendahara', value: 'Rp 24.150.000' },
      { icon: 'domain', label: 'Rekening Giro Bank BJB', value: 'Rp 739.300.000', highlight: true },
    ],
    rekonsiliasi: true,
  },
  {
    title: 'Dana Desa (APBN) Penyaluran',
    badge: 'Earmark & Non',
    badgeColor: 'bg-surface-container text-primary',
    accentColor: 'bg-on-tertiary-container',
    labelPrefix: null,
    value: null,
    valueColor: null,
    tahap: 'Tahap II',
    status: '100% Salur',
    statusColor: 'text-secondary',
    icon: 'download_done',
    iconBg: 'bg-secondary-container text-on-secondary-container',
    proyeksi: 'Proyeksi Tahap III (40%)',
    proyeksiValue: 'Rp 392.400.000',
    proyeksiBadge: 'Verifikasi SPJ',
    deadline: 'Batas upload OM-SPAN: 30 Nov 2024',
  },
]

export default function KPICards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
      {kpiData.map((kpi, idx) => (
        <div key={idx} className="bg-surface-container-lowest p-space-base rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden">
          <div className={`absolute top-0 left-0 right-0 h-1 ${kpi.accentColor}`}></div>
          <div>
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">{kpi.title}</span>
              {kpi.badge && (
                <span className={`px-space-xs py-space-2xs rounded ${kpi.badgeColor} font-label-sm text-label-sm`}>
                  {kpi.badge}
                </span>
              )}
            </div>
            {kpi.value && (
              <div className="mt-space-sm flex items-baseline gap-space-xs">
                {kpi.labelPrefix && (
                  <span className="font-headline-sm text-headline-sm text-on-surface-variant font-semibold">{kpi.labelPrefix}</span>
                )}
                <span className={`font-display-md text-display-md ${kpi.valueColor} tracking-tight font-bold`}>{kpi.value}</span>
              </div>
            )}
            {kpi.tahap && (
              <div className="mt-space-sm flex items-center justify-between">
                <div>
                  <span className="font-display-md text-display-md text-primary font-bold">{kpi.tahap}</span>
                  <span className={`font-label-md text-label-md ${kpi.statusColor} font-semibold ml-space-xs`}>{kpi.status}</span>
                </div>
                <div className={`w-10 h-10 rounded-full ${kpi.iconBg} flex items-center justify-center`}>
                  <MaterialSymbolsOutlined icon={kpi.icon} className="text-[20px]" />
                </div>
              </div>
            )}
          </div>
          {kpi.details && (
            <div className="mt-space-md pt-space-sm bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-space-xs">
              {kpi.details.map((d, di) => (
                <div key={di} className={`flex justify-between font-body-sm text-body-sm ${d.bold ? 'pt-space-2xs text-secondary' : ''}`}>
                  <span className={d.bold ? 'font-medium' : 'text-on-surface-variant'}>{d.label}</span>
                  <span className={`font-numeric-table text-numeric-table font-semibold ${d.highlight} ${d.bold ? 'font-bold' : ''}`}>{d.value}</span>
                </div>
              ))}
            </div>
          )}
          {kpi.target && (
            <div className="mt-space-md flex flex-col gap-space-xs">
              <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
                <span>{kpi.target}</span>
                <span className="font-numeric-table text-numeric-table font-semibold text-primary">{kpi.sisa}</span>
              </div>
              <div className="w-full h-3 bg-surface-container-high rounded-full overflow-hidden flex">
                {kpi.progress.map((p, pi) => (
                  <div key={pi} className={`h-full ${p.color} rounded-full`} style={{ width: p.width }} title={p.title}></div>
                ))}
              </div>
              <div className="flex items-center justify-between font-body-sm text-body-sm text-outline pt-space-2xs">
                {kpi.progress.map((p, pi) => (
                  <div key={pi} className="flex items-center gap-space-xs">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color === 'bg-secondary' ? 'currentColor' : 'var(--color-surface-tint)' }}></span>
                    <span>{p.label}</span>
                  </div>
                ))}
                <span className={`${kpi.remainingColor} font-medium`}>{kpi.remaining}</span>
              </div>
            </div>
          )}
          {kpi.accounts && (
            <div className="mt-space-md p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
              {kpi.accounts.map((acc, ai) => (
                <div key={ai} className="flex items-center justify-between font-body-sm text-body-sm">
                  <div className="flex items-center gap-space-xs">
                    <MaterialSymbolsOutlined icon={acc.icon} className="text-[15px] text-outline" />
                    <span className="text-on-surface-variant">{acc.label}</span>
                  </div>
                  <span className={`font-numeric-table text-numeric-table font-semibold ${acc.highlight ? 'text-primary' : 'text-on-surface'}`}>{acc.value}</span>
                </div>
              ))}
              {kpi.rekonsiliasi && (
                <div className="flex items-center justify-between pt-space-2xs text-secondary font-label-sm text-label-sm">
                  <span className="flex items-center gap-space-2xs">
                    <MaterialSymbolsOutlined icon="check" className="text-[14px]" />
                    Rekonsiliasi Bank
                  </span>
                  <span className="font-semibold">Nihil Selisih</span>
                </div>
              )}
            </div>
          )}
          {kpi.proyeksi && (
            <div className="mt-space-md flex flex-col gap-space-xs">
              <div className="flex justify-between items-center bg-surface-container-low p-space-sm rounded-lg">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-outline">{kpi.proyeksi}</span>
                  <span className="font-numeric-table text-numeric-table font-bold text-on-surface">{kpi.proyeksiValue}</span>
                </div>
                <span className="px-space-xs py-space-2xs rounded bg-surface-container-high text-on-primary-fixed-variant font-label-sm text-label-sm">
                  {kpi.proyeksiBadge}
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-2xs pt-space-2xs">
                <MaterialSymbolsOutlined icon="schedule" className="text-[15px] text-tertiary-container" />
                {kpi.deadline}
              </p>
            </div>
          )}
        </div>
      ))}
    </section>
  )
}
