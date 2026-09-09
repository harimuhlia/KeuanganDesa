import { MaterialSymbolsOutlined } from './MaterialSymbolsOutlined'

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

export default function ApprovalTable() {
  return (
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
  )
}
