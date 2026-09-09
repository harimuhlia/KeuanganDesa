import { MaterialSymbolsOutlined } from './MaterialSymbolsOutlined'

const expenseData = [
  { label: 'Bidang 02: Pembangunan Desa', value: 44, amount: 'Rp 742,4 Jt', color: 'bg-primary' },
  { label: 'Bidang 01: Penyelenggaraan Pemerintahan', value: 28, amount: 'Rp 472,4 Jt', color: 'bg-secondary' },
  { label: 'Bidang 03: Pembinaan Kemasyarakatan', value: 12, amount: 'Rp 202,5 Jt', color: 'bg-surface-tint' },
  { label: 'Bidang 04: Pemberdayaan Masyarakat', value: 11, amount: 'Rp 185,6 Jt', color: 'bg-on-tertiary-container' },
  { label: 'Bidang 05: Tak Terduga & Bencana', value: 5, amount: 'Rp 84,4 Jt', color: 'bg-error' },
]

export default function ExpenseDonutChart() {
  return (
    <div className="lg:col-span-5 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-space-sm">
          <div>
            <h3 className="font-headline-md text-headline-md text-primary">Realisasi Belanja per Bidang</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">Distribusi Sektor Pelaksanaan APBDes 2024</p>
          </div>
          <span className="px-space-xs py-space-2xs bg-surface-container text-primary font-label-sm text-label-sm rounded">
            5 Bidang
          </span>
        </div>
        <div className="flex items-center justify-center my-space-md">
          <div className="relative w-44 h-44">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-surface-container-high"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="4.5"
              ></path>
              <path
                className="text-primary"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeDasharray="44, 100"
                strokeWidth="4.8"
              ></path>
              <path
                className="text-secondary"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeDasharray="28, 100"
                strokeDashoffset="-44"
                strokeWidth="4.8"
              ></path>
              <path
                className="text-surface-tint"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeDasharray="12, 100"
                strokeDashoffset="-72"
                strokeWidth="4.8"
              ></path>
              <path
                className="text-on-tertiary-container"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeDasharray="11, 100"
                strokeDashoffset="-84"
                strokeWidth="4.8"
              ></path>
              <path
                className="text-error"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeDasharray="5, 100"
                strokeDashoffset="-95"
                strokeWidth="4.8"
              ></path>
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
  )
}
