import { MaterialSymbolsOutlined } from '../components/MaterialSymbolsOutlined'

const rabData = [
  {
    code: 'RAB-001',
    name: 'Pembangunan Saluran Drainase Dusun II',
    category: 'Pembangunan Desa',
    budget: 'Rp 88.500.000',
    realization: 'Rp 88.500.000',
    percent: 100,
    status: 'Selesai',
    statusColor: 'bg-secondary-container text-on-secondary-container',
  },
  {
    code: 'RAB-002',
    name: 'Rehabilitasi Gedung Posyandu Melati',
    category: 'Pembinaan Kemasyarakatan',
    budget: 'Rp 64.000.000',
    realization: 'Rp 45.000.000',
    percent: 70.3,
    status: 'On-Track',
    statusColor: 'bg-surface-container-high text-on-primary-fixed-variant',
  },
  {
    code: 'RAB-003',
    name: 'Peningkatan Jalan Usaha Tani Beton Kp. Sinar Mulya',
    category: 'Pembangunan Desa',
    budget: 'Rp 142.000.000',
    realization: 'Rp 50.000.000',
    percent: 35.2,
    status: 'Berjalan',
    statusColor: 'bg-surface-container text-primary',
  },
  {
    code: 'RAB-004',
    name: 'Pengaspalan Jalan Desa Rt 05/Rw 02',
    category: 'Pembangunan Desa',
    budget: 'Rp 120.000.000',
    realization: 'Rp 0',
    percent: 0,
    status: 'Belum Dimulai',
    statusColor: 'bg-surface-container-low text-on-surface-variant',
  },
  {
    code: 'RAB-005',
    name: 'Bantuan Langsung Tunai (BLT) Dana Desa',
    category: 'Penanggulangan Bencana',
    budget: 'Rp 111.000.000',
    realization: 'Rp 111.000.000',
    percent: 100,
    status: 'Selesai',
    statusColor: 'bg-secondary-container text-on-secondary-container',
  },
]

export default function RABPage() {
  return (
    <div className="space-y-space-lg">
      <section className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
          <div>
            <div className="flex items-center gap-space-xs">
              <MaterialSymbolsOutlined icon="account_balance_wallet" className="text-primary text-[20px]" />
              <h2 className="font-headline-lg text-headline-lg text-primary">Rencana Anggaran Biaya (RAB)</h2>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">
              Detail RAB per Kegiatan Desa TA 2024 - APBDes Perubahan
            </p>
          </div>
          <div className="flex items-center gap-space-sm">
            <button className="h-9 px-space-md bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg flex items-center gap-space-xs transition-colors">
              <MaterialSymbolsOutlined icon="file_download" className="text-[18px]" />
              <span>Ekspor RAB</span>
            </button>
            <button className="h-9 px-space-md bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md rounded-lg flex items-center gap-space-xs transition-colors shadow-sm">
              <MaterialSymbolsOutlined icon="add" className="text-[18px]" />
              <span>Tambah Kegiatan</span>
            </button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
        <div className="bg-surface-container-lowest p-space-base rounded-xl shadow-sm">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Total Pagu RAB</span>
          <div className="mt-space-sm font-display-md text-display-md text-primary font-bold">Rp 525.500.000</div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">5 Kegiatan Terencana</p>
        </div>
        <div className="bg-surface-container-lowest p-space-base rounded-xl shadow-sm">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Total Realisasi</span>
          <div className="mt-space-sm font-display-md text-display-md text-secondary font-bold">Rp 294.500.000</div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">56.1% Tersalurkan</p>
        </div>
        <div className="bg-surface-container-lowest p-space-base rounded-xl shadow-sm">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Kegiatan Selesai</span>
          <div className="mt-space-sm font-display-md text-display-md text-primary font-bold">2 Kegiatan</div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">Drainase & BLT Dana Desa</p>
        </div>
        <div className="bg-surface-container-lowest p-space-base rounded-xl shadow-sm">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Sisa Pagu</span>
          <div className="mt-space-sm font-display-md text-display-md text-on-surface font-bold">Rp 231.000.000</div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">2 Kegiatan Berjalan</p>
        </div>
      </section>

      <section className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left font-body-md text-body-md border-collapse">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                <th className="py-ledger-cell-padding-y px-ledger-cell-padding-x rounded-l">Kode & Nama Kegiatan</th>
                <th className="py-ledger-cell-padding-y px-ledger-cell-padding-x">Bidang</th>
                <th className="py-ledger-cell-padding-y px-ledger-cell-padding-x text-right">Pagu RAB (Rp)</th>
                <th className="py-ledger-cell-padding-y px-ledger-cell-padding-x text-right">Realisasi (Rp)</th>
                <th className="py-ledger-cell-padding-y px-ledger-cell-padding-x text-center">%</th>
                <th className="py-ledger-cell-padding-y px-ledger-cell-padding-x text-center">Status</th>
                <th className="py-ledger-cell-padding-y px-ledger-cell-padding-x text-right rounded-r">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              {rabData.map((row, idx) => (
                <tr key={idx} className="hover:bg-surface-container-low transition-colors">
                  <td className="py-ledger-cell-padding-y px-ledger-cell-padding-x">
                    <div className="flex flex-col">
                      <span className="font-headline-sm text-headline-sm text-primary font-semibold">{row.code}</span>
                      <span className="font-body-sm text-body-sm text-on-surface">{row.name}</span>
                    </div>
                  </td>
                  <td className="py-ledger-cell-padding-y px-ledger-cell-padding-x font-body-sm text-body-sm text-on-surface-variant">
                    {row.category}
                  </td>
                  <td className="py-ledger-cell-padding-y px-ledger-cell-padding-x text-right font-numeric-table text-numeric-table font-semibold text-on-surface">
                    {row.budget}
                  </td>
                  <td className="py-ledger-cell-padding-y px-ledger-cell-padding-x text-right font-numeric-table text-numeric-table font-semibold text-secondary">
                    {row.realization}
                  </td>
                  <td className="py-ledger-cell-padding-y px-ledger-cell-padding-x text-center">
                    <span className="font-numeric-table text-numeric-table font-bold text-primary">{row.percent}%</span>
                  </td>
                  <td className="py-ledger-cell-padding-y px-ledger-cell-padding-x text-center">
                    <span className={`px-space-xs py-space-2xs rounded ${row.statusColor} font-label-sm text-label-sm font-semibold inline-block`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-ledger-cell-padding-y px-ledger-cell-padding-x text-right">
                    <button className="px-space-sm py-1.5 bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-sm rounded transition-colors">
                      Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
