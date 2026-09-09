import { MaterialSymbolsOutlined } from './MaterialSymbolsOutlined'

const revenueData = [
  { code: 'DDS', name: 'Dana Desa (APBN Pusat)', realized: 'Rp 981.000.000', target: 'Rp 1.050.000.000', percent: 93.4 },
  { code: 'ADD', name: 'Alokasi Dana Desa (APBD Kab)', realized: 'Rp 640.000.000', target: 'Rp 800.000.000', percent: 80.0 },
  { code: 'PAD', name: 'Pendapatan Asli Desa (BUMDes & Tanah Kas)', realized: 'Rp 174.500.000', target: 'Rp 180.000.000', percent: 96.9 },
  { code: 'PBH', name: 'Bagi Hasil Pajak & Retribusi Daerah', realized: 'Rp 145.300.000', target: 'Rp 220.800.000', percent: 65.8 },
  { code: 'PBP', name: 'Bantuan Keuangan Khusus Provinsi Jabar', realized: 'Rp 130.000.000', target: 'Rp 200.000.000', percent: 65.0 },
]

export default function RevenueChart() {
  const totalRealized = 'Rp 2.070.800.000'
  const totalTargetPercent = 84.5

  return (
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
          Total Pendapatan Diterima: <strong className="text-primary font-numeric-table">{totalRealized}</strong> dari Target APBDes ({totalTargetPercent}%)
        </span>
        <a className="font-label-sm text-label-sm text-primary hover:underline flex items-center gap-space-2xs" href="#">
          <span>Lihat Buku Kas Pembantu Penerimaan</span>
          <MaterialSymbolsOutlined icon="arrow_forward" className="text-[14px]" />
        </a>
      </div>
    </div>
  )
}
