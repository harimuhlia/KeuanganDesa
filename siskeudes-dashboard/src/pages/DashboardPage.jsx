import { MaterialSymbolsOutlined } from '../components/MaterialSymbolsOutlined'

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

const revenueData = [
  { code: 'DDS', name: 'Dana Desa (APBN Pusat)', realized: 'Rp 981.000.000', target: 'Rp 1.050.000.000', percent: 93.4 },
  { code: 'ADD', name: 'Alokasi Dana Desa (APBD Kab)', realized: 'Rp 640.000.000', target: 'Rp 800.000.000', percent: 80.0 },
  { code: 'PAD', name: 'Pendapatan Asli Desa (BUMDes & Tanah Kas)', realized: 'Rp 174.500.000', target: 'Rp 180.000.000', percent: 96.9 },
  { code: 'PBH', name: 'Bagi Hasil Pajak & Retribusi Daerah', realized: 'Rp 145.300.000', target: 'Rp 220.800.000', percent: 65.8 },
  { code: 'PBP', name: 'Bantuan Keuangan Khusus Provinsi Jabar', realized: 'Rp 130.000.000', target: 'Rp 200.000.000', percent: 65.0 },
]

const expenseData = [
  { label: 'Bidang 02: Pembangunan Desa', value: 44, amount: 'Rp 742,4 Jt', color: 'bg-primary' },
  { label: 'Bidang 01: Penyelenggaraan Pemerintahan', value: 28, amount: 'Rp 472,4 Jt', color: 'bg-secondary' },
  { label: 'Bidang 03: Pembinaan Kemasyarakatan', value: 12, amount: 'Rp 202,5 Jt', color: 'bg-surface-tint' },
  { label: 'Bidang 04: Pemberdayaan Masyarakat', value: 11, amount: 'Rp 185,6 Jt', color: 'bg-on-tertiary-container' },
  { label: 'Bidang 05: Tak Terduga & Bencana', value: 5, amount: 'Rp 84,4 Jt', color: 'bg-error' },
]

const sppData = [
  {
    number: '042/SPP/PPKD/2024',
    description: 'Pembangunan Saluran Irigasi Tersier Dusun II (Tahap I)',
    source: 'Sumber: DDS (Dana Desa Earmark)',
    ppkd: 'Kasi Kesejahteraan',
    pic: 'Agus Supriyatna',
    amount: '45.200.000',
    status: 'Menunggu Kades',
    statusColor: 'bg-surface-container-high text-on-primary-fixed-variant',
  },
  {
    number: '043/SPP/PPKD/2024',
    description: 'Insentif Guru PAUD Mawar & Kader Posyandu Cempaka (Okt 2024)',
    source: 'Sumber: ADD (Alokasi Dana Desa)',
    ppkd: 'Kaur Pelayanan',
    pic: 'Dewi Sartika',
    amount: '12.600.000',
    status: 'Verifikasi Sekdes',
    statusColor: 'bg-surface-container-high text-on-primary-fixed-variant',
  },
  {
    number: '044/SPP/PPKD/2024',
    description: 'Honorarium Satlinmas Pengamanan Pilkades & Ketertiban Umum',
    source: 'Sumber: PBH (Bagi Hasil Pajak)',
    ppkd: 'Kasi Pemerintahan',
    pic: 'H. Hendra Gunawan',
    amount: '8.400.000',
    status: 'Verifikasi Sekdes',
    statusColor: 'bg-surface-container-high text-on-primary-fixed-variant',
  },
]

const taxData = [
  {
    name: 'PPh Pasal 21',
    desc: 'Tenaga Ahli & Honor Pegawai',
    value: 'Rp 18.420.000',
    status: '100% Lunas NTPN',
    statusColor: 'text-secondary',
  },
  {
    name: 'PPh Pasal 22',
    desc: 'Pengadaan Barang Fisik & Material',
    value: 'Rp 26.850.000',
    status: '100% Lunas NTPN',
    statusColor: 'text-secondary',
  },
  {
    name: 'PPN 11%',
    desc: 'Faktur Rekanan CV Makmur Jaya',
    value: 'Rp 4.120.000',
    status: 'Draft Billing Aktif',
    statusColor: 'text-on-tertiary-container',
  },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col w-full gap-space-lg">
      <section className="flex flex-col lg:flex-row lg:items-center justify-between bg-surface-container-lowest p-space-lg rounded-xl shadow-sm gap-space-md">
        <div className="flex items-center gap-space-md">
          <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center text-on-primary">
            <MaterialSymbolsOutlined icon="analytics" className="text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }} />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs flex-wrap">
              <span className="font-headline-lg text-headline-lg text-primary">Ringkasan Eksekutif Keuangan Desa</span>
              <span className="px-space-xs py-space-2xs rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">Kompilasi Real-Time</span>
              <span className="px-space-xs py-space-2xs rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">Sinkronisasi BPKP Aktif</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">
              Posisi Anggaran Pendapatan dan Belanja Desa (APBDes) Perubahan TA 2024 • Cut-Off Data: 24 Oktober 2024, 08:30 WIB
            </p>
          </div>
        </div>
        <div className="flex items-center gap-space-sm flex-wrap">
          <div className="flex items-center gap-space-xs bg-surface-container-low px-space-md py-space-xs rounded-lg text-primary">
            <MaterialSymbolsOutlined icon="verified_user" className="text-[18px]" />
            <span className="font-label-md text-label-md">Audit Score: 92.4 (A)</span>
          </div>
          <button className="h-9 px-space-md bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg flex items-center gap-space-xs transition-colors">
            <MaterialSymbolsOutlined icon="print" className="text-[18px]" />
            <span>Ekspor Ringkasan</span>
          </button>
          <button className="h-9 px-space-md bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md rounded-lg flex items-center gap-space-xs transition-colors shadow-sm">
            <MaterialSymbolsOutlined icon="fact_check" className="text-[18px]" />
            <span>Verifikasi Masal SPP</span>
          </button>
        </div>
      </section>

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
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
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

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
        <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md gap-space-xs">
            <div>
              <div className="flex items-center gap-space-xs">
                <MaterialSymbolsOutlined icon="account_balance_wallet" className="text-primary text-[20px]" />
                <h3 className="font-headline-md text-headline-md text-primary">Realisasi Penerimaan APBDes TA 2024</h3>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">
                Perbandingan Anggaran Rencana vs Penerimaan Kas per Akun Sumber Dana
              </p>
            </div>
            <div className="flex items-center gap-space-sm font-label-sm text-label-sm">
              <div className="flex items-center gap-space-xs">
                <span className="w-3 h-3 rounded bg-primary-container"></span>
                <span className="text-on-surface-variant">Pagu Target</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="w-3 h-3 rounded bg-secondary"></span>
                <span className="text-on-surface-variant">Realisasi</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-space-md my-space-xs">
            {revenueData.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-space-2xs">
                <div className="flex justify-between items-baseline font-body-sm text-body-sm">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-sm text-label-sm px-space-xs py-space-2xs rounded bg-surface-container text-primary">{item.code}</span>
                    <span className="font-semibold text-on-surface">{item.name}</span>
                  </div>
                  <div className="font-numeric-table text-numeric-table">
                    <span className="text-secondary font-bold">{item.realized}</span>
                    <span className="text-outline"> / {item.target}</span>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold ml-space-xs">({item.percent}%)</span>
                  </div>
                </div>
                <div className="w-full h-3 bg-surface-container rounded-full overflow-hidden flex">
                  <div className="h-full bg-secondary rounded-full" style={{ width: `${item.percent}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-space-md mt-space-sm bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between flex-wrap gap-space-xs">
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Total Pendapatan Diterima: <strong className="text-primary font-numeric-table">Rp 2.070.800.000</strong> dari Target APBDes (84.5%)
            </span>
            <a className="font-label-sm text-label-sm text-primary hover:underline flex items-center gap-space-2xs" href="#">
              <span>Lihat Buku Kas Pembantu Penerimaan</span>
              <MaterialSymbolsOutlined icon="arrow_forward" className="text-[14px]" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-space-sm">
              <div>
                <h3 className="font-headline-md text-headline-md text-primary">Realisasi Belanja per Bidang</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">Distribusi Sektor Pelaksanaan APBDes 2024</p>
              </div>
              <span className="px-space-xs py-space-2xs bg-surface-container text-primary font-label-sm text-label-sm rounded">5 Bidang</span>
            </div>
            <div className="flex items-center justify-center my-space-md">
              <div className="relative w-44 h-44">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <path className="text-surface-container-high" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4.5"></path>
                  <path className="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="44, 100" strokeWidth="4.8"></path>
                  <path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="28, 100" strokeDashoffset="-44" strokeWidth="4.8"></path>
                  <path className="text-surface-tint" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="12, 100" strokeDashoffset="-72" strokeWidth="4.8"></path>
                  <path className="text-on-tertiary-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="11, 100" strokeDashoffset="-84" strokeWidth="4.8"></path>
                  <path className="text-error" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="5, 100" strokeDashoffset="-95" strokeWidth="4.8"></path>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">Rp 1,68 M</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Realisasi</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-space-xs mt-space-sm font-body-sm text-body-sm">
              {expenseData.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-space-xs rounded hover:bg-surface-container transition-colors">
                  <div className="flex items-center gap-space-xs">
                    <span className={`w-3 h-3 rounded-full ${item.color}`}></span>
                    <span className="text-on-surface">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-space-sm font-numeric-table text-numeric-table">
                    <span className="text-on-surface-variant">{item.amount}</span>
                    <span className={`font-bold ${idx === 0 ? 'text-primary' : idx === 1 ? 'text-secondary' : idx === 4 ? 'text-error' : 'text-primary'} w-10 text-right`}>{item.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-space-sm text-center">
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Penyaluran sesuai Permendes PDTT No. 13/2023 &amp; PMK No. 145/2023
            </span>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-12 gap-space-md">
        <div className="xl:col-span-8 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md gap-space-sm">
              <div className="flex items-center gap-space-xs">
                <div className="w-8 h-8 rounded bg-surface-container-high text-primary flex items-center justify-center">
                  <MaterialSymbolsOutlined icon="draw" className="text-[20px]" />
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary">Antrean Pengesahan & Tanda Tangan SPP</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    3 Surat Permintaan Pembayaran memerlukan verifikasi teknis Sekdes & persetujuan Kades
                  </p>
                </div>
              </div>
              <span className="px-space-sm py-space-xs rounded-full bg-surface-container-high text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold flex items-center gap-space-2xs self-start sm:self-auto">
                <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
                3 Berkas Pending
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left font-body-md text-body-md border-collapse">
                <thead>
                  <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                    <th className="py-ledger-cell-padding-y px-ledger-cell-padding-x rounded-l">No. Dokumen & Uraian SPP</th>
                    <th className="py-ledger-cell-padding-y px-ledger-cell-padding-x">Pelaksana Kegiatan (PPKD)</th>
                    <th className="py-ledger-cell-padding-y px-ledger-cell-padding-x text-right">Jumlah (Rp)</th>
                    <th className="py-ledger-cell-padding-y px-ledger-cell-padding-x text-center">Status</th>
                    <th className="py-ledger-cell-padding-y px-ledger-cell-padding-x text-right rounded-r">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container">
                  {sppData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-surface-container-low transition-colors">
                      <td className="py-ledger-cell-padding-y px-ledger-cell-padding-x">
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-headline-sm text-primary font-semibold">{row.number}</span>
                          <span className="font-body-sm text-body-sm text-on-surface">{row.description}</span>
                          <span className="font-label-sm text-label-sm text-outline">{row.source}</span>
                        </div>
                      </td>
                      <td className="py-ledger-cell-padding-y px-ledger-cell-padding-x font-body-sm text-body-sm">
                        <div className="flex flex-col">
                          <span className="font-medium text-on-surface">{row.ppkd}</span>
                          <span className="text-on-surface-variant">{row.pic}</span>
                        </div>
                      </td>
                      <td className="py-ledger-cell-padding-y px-ledger-cell-padding-x text-right font-numeric-table text-numeric-table font-bold text-primary">
                        {row.amount}
                      </td>
                      <td className="py-ledger-cell-padding-y px-ledger-cell-padding-x text-center">
                        <span className={`px-space-xs py-space-2xs rounded ${row.statusColor} font-label-sm text-label-sm font-semibold inline-block`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="py-ledger-cell-padding-y px-ledger-cell-padding-x text-right">
                        <button
                          className="px-space-sm py-1.5 bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-sm rounded transition-colors"
                          onClick={() => alert(`Membuka Berkas SPP No. ${row.number} untuk verifikasi TTE.`)}
                        >
                          Tinjau SPP
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="pt-space-md flex items-center justify-between flex-wrap gap-space-xs font-body-sm text-body-sm">
            <span className="text-on-surface-variant">
              Total Nilai Berkas Pending: <strong className="font-numeric-table text-primary">Rp 66.200.000</strong>
            </span>
            <span className="text-secondary flex items-center gap-space-2xs font-label-sm text-label-sm">
              <MaterialSymbolsOutlined icon="security" className="text-[16px]" />
              Sertifikat Elektronik BSrE BSSN Siap
            </span>
          </div>
        </div>

        <div className="xl:col-span-4 flex flex-col gap-space-md">
          <div className="bg-surface-container-lowest p-space-base rounded-xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-space-xs">
                <div className="flex items-center gap-space-xs">
                  <MaterialSymbolsOutlined icon="receipt_long" className="text-secondary text-[20px]" />
                  <h4 className="font-headline-sm text-headline-sm text-primary">Kepatuhan Setor Pajak</h4>
                </div>
                <span className="px-space-xs py-space-2xs rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                  94% Patuh
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Pungutan dan Penyetoran Pajak Masa Berjalan via NTPN DJP
              </p>
              <div className="mt-space-md flex flex-col gap-space-xs font-body-sm text-body-sm">
                {taxData.map((tax, idx) => (
                  <div key={idx} className="flex justify-between items-center p-space-xs rounded bg-surface-container-low">
                    <div>
                      <span className="font-semibold text-primary">{tax.name}</span>
                      <span className="text-outline block font-body-sm text-body-sm">{tax.desc}</span>
                    </div>
                    <div className="text-right">
                      <span className={`font-numeric-table text-numeric-table font-semibold ${tax.statusColor}`}>{tax.value}</span>
                      <span className={`block font-label-sm text-label-sm ${tax.statusColor}`}>{tax.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-space-sm mt-space-xs">
              <div className="flex items-center justify-between font-label-sm text-label-sm text-outline">
                <span>Batas Pembayaran Pajak Masa:</span>
                <span className="font-semibold text-on-surface">10 November 2024</span>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-base rounded-xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-space-xs">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Sistem Pengawasan BPKP</span>
                <span className="px-space-xs py-space-2xs rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                  Kategori A
                </span>
              </div>
              <div className="flex items-baseline gap-space-sm mt-space-xs">
                <span className="font-display-lg text-display-lg text-primary font-bold">92.4</span>
                <span className="font-headline-sm text-headline-sm text-secondary font-semibold">Sangat Baik (Tertib Tata Kelola)</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                Evaluasi berkala kepatuhan regulasi Kemendagri No. 20/2018 dan pemutakhiran buku inventaris aset desa.
              </p>
            </div>
            <div className="mt-space-md pt-space-sm bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <MaterialSymbolsOutlined icon="gavel" className="text-secondary text-[18px]" />
                <span className="font-label-sm text-label-sm text-on-surface-variant">Temuan LHP Inspektorat:</span>
              </div>
              <span className="font-label-md text-label-md text-secondary font-bold">0 Temuan Material</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
