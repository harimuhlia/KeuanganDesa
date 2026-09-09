import { useState, useEffect } from 'react'
import { MaterialSymbolsOutlined } from '../components/MaterialSymbolsOutlined'
import { supabase } from '../lib/supabase'
import { fetchRAB, insertRAB, deleteRAB } from '../lib/rab'

const emptyForm = {
  code: '',
  name: '',
  category: 'Pembangunan Desa',
  budget: '',
  realization: '',
  percent: 0,
  status: 'Belum Dimulai',
}

export default function RABPage() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(emptyForm)

  const load = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchRAB()
      setItems(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      code: form.code,
      name: form.name,
      category: form.category,
      budget: Number(form.budget),
      realization: Number(form.realization),
      percent: Number(form.percent),
      status: form.status,
    }
    await insertRAB(payload)
    setForm(emptyForm)
    setShowForm(false)
    await load()
  }

  const handleDelete = async (id) => {
    if (!confirm('Hapus data RAB ini?')) return
    await deleteRAB(id)
    await load()
  }

  const formatRupiah = (value) => {
    const number = Number(value || 0)
    return 'Rp ' + number.toLocaleString('id-ID')
  }

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
            <button
              onClick={() => setShowForm((v) => !v)}
              className="h-9 px-space-md bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md rounded-lg flex items-center gap-space-xs transition-colors shadow-sm"
            >
              <MaterialSymbolsOutlined icon="add" className="text-[18px]" />
              <span>Tambah Kegiatan</span>
            </button>
          </div>
        </div>
      </section>

      {showForm && (
        <section className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            <div className="flex flex-col gap-space-2xs">
              <label className="font-label-sm text-label-sm text-on-surface">Kode Kegiatan</label>
              <input
                className="px-space-sm py-space-xs rounded-lg border border-surface-container bg-surface-container-lowest font-body-md text-body-md text-on-surface"
                value={form.code}
                onChange={(e) => setForm({ ...form, code: e.target.value })}
                required
              />
            </div>
            <div className="flex flex-col gap-space-2xs">
              <label className="font-label-sm text-label-sm text-on-surface">Nama Kegiatan</label>
              <input
                className="px-space-sm py-space-xs rounded-lg border border-surface-container bg-surface-container-lowest font-body-md text-body-md text-on-surface"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div className="flex flex-col gap-space-2xs">
              <label className="font-label-sm text-label-sm text-on-surface">Bidang</label>
              <select
                className="px-space-sm py-space-xs rounded-lg border border-surface-container bg-surface-container-lowest font-body-md text-body-md text-on-surface"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              >
                <option>Pembangunan Desa</option>
                <option>Penyelenggaraan Pemerintahan Desa</option>
                <option>Pembinaan Kemasyarakatan</option>
                <option>Pemberdayaan Masyarakat Desa</option>
                <option>Penanggulangan Bencana & Mendesak</option>
              </select>
            </div>
            <div className="flex flex-col gap-space-2xs">
              <label className="font-label-sm text-label-sm text-on-surface">Status</label>
              <select
                className="px-space-sm py-space-xs rounded-lg border border-surface-container bg-surface-container-lowest font-body-md text-body-md text-on-surface"
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
              >
                <option>Belum Dimulai</option>
                <option>Berjalan</option>
                <option>On-Track</option>
                <option>Selesai</option>
              </select>
            </div>
            <div className="flex flex-col gap-space-2xs">
              <label className="font-label-sm text-label-sm text-on-surface">Pagu RAB (Rp)</label>
              <input
                type="number"
                className="px-space-sm py-space-xs rounded-lg border border-surface-container bg-surface-container-lowest font-body-md text-body-md text-on-surface"
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                required
              />
            </div>
            <div className="flex flex-col gap-space-2xs">
              <label className="font-label-sm text-label-sm text-on-surface">Realisasi (Rp)</label>
              <input
                type="number"
                className="px-space-sm py-space-xs rounded-lg border border-surface-container bg-surface-container-lowest font-body-md text-body-md text-on-surface"
                value={form.realization}
                onChange={(e) => setForm({ ...form, realization: e.target.value })}
                required
              />
            </div>
            <div className="flex flex-col gap-space-2xs md:col-span-2">
              <button type="submit" className="h-9 px-space-md bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md rounded-lg transition-colors shadow-sm">
                Simpan
              </button>
            </div>
          </form>
        </section>
      )}

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
        <div className="bg-surface-container-lowest p-space-base rounded-xl shadow-sm">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Total Pagu RAB</span>
          <div className="mt-space-sm font-display-md text-display-md text-primary font-bold">
            {formatRupiah(items.reduce((sum, item) => sum + Number(item.budget || 0), 0))}
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">{items.length} Kegiatan Terencana</p>
        </div>
        <div className="bg-surface-container-lowest p-space-base rounded-xl shadow-sm">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Total Realisasi</span>
          <div className="mt-space-sm font-display-md text-display-md text-secondary font-bold">
            {formatRupiah(items.reduce((sum, item) => sum + Number(item.realization || 0), 0))}
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">Tersalurkan</p>
        </div>
        <div className="bg-surface-container-lowest p-space-base rounded-xl shadow-sm">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Kegiatan Selesai</span>
          <div className="mt-space-sm font-display-md text-display-md text-primary font-bold">
            {items.filter((i) => i.status === 'Selesai').length} Kegiatan
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">Selesai</p>
        </div>
        <div className="bg-surface-container-lowest p-space-base rounded-xl shadow-sm">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">Sisa Pagu</span>
          <div className="mt-space-sm font-display-md text-display-md text-on-surface font-bold">
            {formatRupiah(items.reduce((sum, item) => sum + (Number(item.budget || 0) - Number(item.realization || 0)), 0))}
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">Belum Tersalur</p>
        </div>
      </section>

      {error && (
        <div className="bg-error-container text-on-error-container p-space-base rounded-xl">
          Gagal memuat data: {error}
        </div>
      )}

      <section className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-space-base text-center text-on-surface-variant">Memuat data...</div>
        ) : (
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
                {items.map((row) => (
                  <tr key={row.id} className="hover:bg-surface-container-low transition-colors">
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
                      {formatRupiah(row.budget)}
                    </td>
                    <td className="py-ledger-cell-padding-y px-ledger-cell-padding-x text-right font-numeric-table text-numeric-table font-semibold text-secondary">
                      {formatRupiah(row.realization)}
                    </td>
                    <td className="py-ledger-cell-padding-y px-ledger-cell-padding-x text-center">
                      <span className="font-numeric-table text-numeric-table font-bold text-primary">{row.percent}%</span>
                    </td>
                    <td className="py-ledger-cell-padding-y px-ledger-cell-padding-x text-center">
                      <span className="px-space-xs py-space-2xs rounded bg-surface-container text-primary font-label-sm text-label-sm font-semibold inline-block">
                        {row.status}
                      </span>
                    </td>
                    <td className="py-ledger-cell-padding-y px-ledger-cell-padding-x text-right">
                      <button
                        onClick={() => handleDelete(row.id)}
                        className="px-space-sm py-1.5 bg-error hover:bg-error-container text-on-error font-label-sm text-label-sm rounded transition-colors"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
                {items.length === 0 && (
                  <tr>
                    <td colSpan={7} className="py-ledger-cell-padding-y px-ledger-cell-padding-x text-center text-on-surface-variant">
                      Belum ada data RAB.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  )
}
