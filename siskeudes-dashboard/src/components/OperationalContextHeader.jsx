import { MaterialSymbolsOutlined } from './MaterialSymbolsOutlined'

export default function OperationalContextHeader() {
  return (
    <section className="flex flex-col lg:flex-row lg:items-center justify-between bg-surface-container-lowest p-space-lg rounded-xl shadow-sm gap-space-md">
      <div className="flex items-center gap-space-md">
        <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center text-on-primary">
          <MaterialSymbolsOutlined icon="analytics" className="text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }} />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-space-xs flex-wrap">
            <span className="font-headline-lg text-headline-lg text-primary">Ringkasan Eksekutif Keuangan Desa</span>
            <span className="px-space-xs py-space-2xs rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm">
              Kompilasi Real-Time
            </span>
            <span className="px-space-xs py-space-2xs rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
              Sinkronisasi BPKP Aktif
            </span>
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
  )
}
