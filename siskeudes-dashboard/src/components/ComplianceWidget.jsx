import { MaterialSymbolsOutlined } from './MaterialSymbolsOutlined'

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

export default function ComplianceWidget() {
  return (
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
  )
}
