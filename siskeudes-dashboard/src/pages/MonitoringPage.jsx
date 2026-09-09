import { useState } from 'react'
import { MaterialSymbolsOutlined } from '../components/MaterialSymbolsOutlined'

const projects = [
  {
    code: 'PRY-2024-001',
    title: 'Pembangunan Saluran Drainase & TPT Dusun Cibitung',
    status: 'Selesai 100% (Sudah BAST)',
    statusColor: 'bg-secondary-container text-on-secondary-container',
    bidang: 'Bidang Pelaksanaan Pembangunan Desa • Dusun Cibitung RT 02/04',
    pagu: 'Rp 88.500.000',
    realisasi: 'Rp 88.500.000 (100%)',
    fisik: '100%',
    tpk: 'Rustam & Subagyo',
    images: [
      { alt: 'Ground-level photographic view of village ground excavation work for drainage ditches', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkTp4VXBAcyJTJ0d9n3c9jeGCNorF4HibG1_lJRzhXMwAnH58GHOTQnrrjS8xO8N27I1jg4XqKa9bJwEmXK1gBS_zCazJfEge5rYcBSoGiSNZfyguuooYKnaeBDGOQ2epjm5JXOH9zb-IdAreizErR2T8X6p63V5qpR_PXQ9BrH7UGkHjD29B0UHskcQKQDBGean--sHnE9hqaaNIzZQUjh2SKeq6kZB5UuYBbuN7k4j8xiMSRDPskvA', label: 'Tahap 0% (Kondisi Awal)', date: '12 Apr 2024 • S 6°42\'18" E 106°55\'42"' },
      { alt: 'Construction site in rural Indonesia village drainage project showing stone masonry workers', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdhzqDG79QDUw-eK3Caj7ou_amqKL4NtETQUIRBWGZmkz-SZlLF3jzb1GEcdkQHxlAqzHKxSONjJme_mlXjwSM8vAuWvsrQ5S1FxpNbmY-zw0Nfka_Qst6iMiKSuoPMNdpo7NBAbNLAnA2tMQxcZxj4NdHvf3QCxqvmWk2bbw27U1UMCtioSZX9eXRcfWZvGK9COSecpnVZeQdd5SF5DrJxRLnsaOShkn3qVin734aMi01W7oMbJS2Pw', label: 'Tahap 50% (Pengerjaan)', date: '04 Mei 2024 • S 6°42\'19" E 106°55\'44"' },
      { alt: 'Finished clean concrete and stone drainage canal in Indonesian countryside', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiaULFqdeankBIqYKfIrACPX2k2fLi3g9Q9aZvk7PvZZG_JDQ37r0kcsgnCV1S5BTfNrag8oe3-QCZHMFyDrBBMseOseFBrYw2lJDhrfs0R_O4uQ2MvYDaJTSoINuWpkL6ZVzfrkWbh0IxoEuiDwZoT2P7Ps3Z58XiWjX1uPTKtgtXHLKhMVsiwngObUxqhlRB0E4gKOnR-6lqRqp7gAF9KWcGb3hpGOmNioia2zmq53coYC0YKxfOzg', label: 'Tahap 100% (Selesai & Berfungsi)', date: '28 Mei 2024 • BAST Terbit' },
    ],
    desc: 'Galian tanah saluran 120m x 0.6m • Pengukuran patok dan bowplank oleh warga PKTD.',
  },
  {
    code: 'PRY-2024-002',
    title: 'Rehabilitasi Gedung Posyandu Melati Dusun I',
    status: '75% On-Track (Tahap Akhir)',
    statusColor: 'bg-surface-container-high text-primary',
    bidang: 'Bidang Pelaksanaan Pembangunan Desa • Posyandu Melati Kp. Babakan RT 01',
    pagu: 'Rp 64.000.000',
    realisasi: 'Rp 45.000.000 (70.3%)',
    fisik: '75.0%',
    estimasi: '14 Hari Kalender (15 Juli 2024)',
    progress: [
      { name: 'Pekerjaan Atap & Plafon', value: '100% Selesai' },
      { name: 'Lantai Keramik 40x40', value: '90% Selesai' },
      { name: 'Pengecatan & Sanitasi Jamban', value: '35% Pengerjaan' },
    ],
    image: { alt: 'Renovation work on village health clinic posyandu building', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSuS6Q3k2-Hc3VW-NSFjqueXoblu4D7ovXSokAbZOFiLYdoiKhwuwezJtmRPjPotJ6MVb39k0FG_gm4woExT8j698UVOEfzzx4Zn-JV5gXF0c_T-mH1bmvjQCrJLIuLNoe3Uyj9a9P5965zDqidviOnPNUaD6hH67-ZD2kqmzvDrJGN1MViykEXEXwlEe0H7e-4quADWcvj-FoVpNnXUiq631kQDg72XdPsD2K1vCh6sFq1jtfamRgkg', label: 'Fisik Aktual: Rangka Plafon & Keramik Baru Terpasang' },
  },
  {
    code: 'PRY-2024-003',
    title: 'Peningkatan Jalan Usaha Tani Beton Kp. Sinar Mulya',
    status: '40% Sedang Berjalan (Pengecoran Segmen 1)',
    statusColor: 'bg-surface-container-high text-primary',
    bidang: 'Bidang Pelaksanaan Pembangunan Desa • Kp. Sinar Mulya RW 03',
    pagu: 'Rp 142.000.000',
    realisasi: 'Rp 50.000.000 (35.2%)',
    fisik: '40.0%',
    image: { alt: 'Agricultural concrete farm road paving project', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4xjvec6J_9kj5-KXXhLRG7AAFr7Jyh-kf1cb65k8Vw3O1wXA6N6gAAXHK4VQMoOFO4pHIl5nWWVj62hMPpH02P7fWCPBIwGict13i-JuPXR5t9OPwFNOXl08hv1LcbPhCZ5t6sLHZgRonkWYyxgvyrNKVgsiW2WCsjiN8u_abzD5x9ZjpBAki6ESo9MR5sMnDAWo8MmL8ghzWSWV8ouuL_HFXztQl0rF4LuAhSHLKH0snoc422e_00A', label: 'Segmen 1: 180m dari 450m telah selesai rabat beton K-225' },
  },
]

export default function MonitoringPage() {
  const [mode, setMode] = useState('internal')

  return (
    <div className="space-y-space-lg">
      <section className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md bg-surface-container-lowest p-space-base rounded-xl shadow-sm">
        <div className="flex items-center gap-space-md">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-on-primary">
            <MaterialSymbolsOutlined icon="troubleshoot" className="text-[24px]" />
          </div>
          <div>
            <div className="flex items-center gap-space-xs">
              <h2 className="font-headline-md text-headline-md text-primary">Monitoring Pengadaan Proyek & Transparansi APBDes</h2>
              <span className="px-space-xs py-space-2xs rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase">Permendagri 20/2018</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Sistem Pengawasan Fisik Berbasis Bukti Lapangan & Penyebarluasan Hak Informasi Warga Desa Sukamaju</p>
          </div>
        </div>
        <div className="flex items-center bg-surface-container p-space-2xs rounded-lg self-start lg:self-auto">
          <button
            className={`flex items-center gap-space-xs px-space-base py-space-xs rounded-lg font-label-md text-label-md transition-all ${mode === 'internal' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
            onClick={() => setMode('internal')}
          >
            <MaterialSymbolsOutlined icon="verified_user" className="text-[18px]" />
            <span>Mode Pengawasan Internal</span>
          </button>
          <button
            className={`flex items-center gap-space-xs px-space-base py-space-xs rounded-lg font-label-md text-label-md transition-all ${mode === 'public' ? 'bg-primary text-on-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
            onClick={() => setMode('public')}
          >
            <MaterialSymbolsOutlined icon="visibility" className="text-[18px]" />
            <span>Pratinjau Portal Publik</span>
          </button>
        </div>
      </section>

      {mode === 'internal' && (
        <section className="space-y-space-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-base">
            <div className="bg-surface-container-lowest p-space-base rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Padat Karya Tunai (PKTD)</span>
                <span className="p-space-xs rounded-lg bg-secondary-container text-on-secondary-container material-symbols-outlined text-[20px]">engineering</span>
              </div>
              <div className="mt-space-sm">
                <div className="font-display-lg text-display-lg text-primary">48 <span className="font-label-md text-label-md text-on-surface-variant font-normal">Warga Lokal</span></div>
                <p className="font-body-sm text-body-sm text-secondary font-semibold mt-space-2xs flex items-center gap-space-2xs">
                  <MaterialSymbolsOutlined icon="check_circle" className="text-[16px]" />
                  100% Mengutamakan RTM & Penganggur
                </p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-base rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Upah Tenaga Kerja Tunai</span>
                <span className="p-space-xs rounded-lg bg-surface-container text-primary material-symbols-outlined text-[20px]">payments</span>
              </div>
              <div className="mt-space-sm">
                <div className="font-display-lg text-display-lg text-primary">Rp 28.500.000</div>
                <div className="w-full bg-surface-container rounded-full h-1.5 mt-space-xs overflow-hidden">
                  <div className="bg-secondary h-1.5 rounded-full" style={{ width: '74%' }}></div>
                </div>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs block">Terserap 74.2% dari target HOK APBDes</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-base rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Deviasi Fisik vs Keuangan</span>
                <span className="p-space-xs rounded-lg bg-surface-container-high text-primary material-symbols-outlined text-[20px]">timeline</span>
              </div>
              <div className="mt-space-sm">
                <div className="flex items-baseline gap-space-xs">
                  <span className="font-display-lg text-display-lg text-secondary">+3.8%</span>
                  <span className="font-label-sm text-label-sm text-secondary uppercase">Progress Cepat</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs">Fisik (71.6%) mendahului SP2D Keuangan (68.1%)</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-base rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Status Sertifikasi Fisik</span>
                <span className="p-space-xs rounded-lg bg-secondary-container text-on-secondary-container material-symbols-outlined text-[20px]">fact_check</span>
              </div>
              <div className="mt-space-sm">
                <div className="font-display-lg text-display-lg text-primary">1 <span className="font-label-md text-label-md text-on-surface-variant font-normal">Selesai (BAST)</span> / 2 Aktif</div>
                <span className="font-body-sm text-body-sm text-on-surface-variant mt-space-2xs block">Pendamping Desa & Babinsa terverifikasi</span>
              </div>
            </div>
          </div>

          <div className="space-y-space-base">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-headline-lg text-headline-lg text-primary">Rekapitulasi Proyek Lapangan TA 2024</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Sinkronisasi Bukti Lapangan 0%, 50%, 100% dan Pelaporan Kuitansi Kas Desa</p>
              </div>
              <div className="flex items-center gap-space-sm">
                <button className="px-space-md py-space-xs rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center gap-space-xs">
                  <MaterialSymbolsOutlined icon="file_download" className="text-[16px]" />
                  <span>Ekspor Form Monev BPD</span>
                </button>
                <button className="px-space-md py-space-xs rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors flex items-center gap-space-xs">
                  <MaterialSymbolsOutlined icon="add_task" className="text-[16px]" />
                  <span>Input Progres Lapangan</span>
                </button>
              </div>
            </div>

            {projects.map((project, idx) => (
              <div key={idx} className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm space-y-space-md">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
                  <div className="space-y-space-2xs">
                    <div className="flex items-center gap-space-sm flex-wrap">
                      <span className="font-label-sm text-label-sm px-space-xs py-space-2xs rounded bg-surface-container font-semibold text-primary">{project.code}</span>
                      <span className={`px-space-sm py-space-2xs rounded-full ${project.statusColor} font-label-sm text-label-sm font-semibold flex items-center gap-space-2xs`}>
                        <MaterialSymbolsOutlined icon="check_circle" className="text-[14px]" /> {project.status}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">{project.bidang}</span>
                    </div>
                    <h3 className="font-display-md text-display-md text-primary">{project.title}</h3>
                  </div>
                  <div className="flex items-center gap-space-xl bg-surface-container-low px-space-lg py-space-sm rounded-xl">
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block">Pagu APBDes</span>
                      <span className="font-numeric-table text-numeric-table font-bold text-primary">{project.pagu}</span>
                    </div>
                    <div className="h-8 w-px bg-surface-container-high"></div>
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block">Realisasi Keuangan</span>
                      <span className="font-numeric-table text-numeric-table font-bold text-secondary">{project.realisasi}</span>
                    </div>
                    <div className="h-8 w-px bg-surface-container-high"></div>
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block">Progres Fisik</span>
                      <span className="font-numeric-table text-numeric-table font-bold text-secondary">{project.fisik}</span>
                    </div>
                  </div>
                </div>

                {project.images && (
                  <div className="space-y-space-xs pt-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-label-md text-label-md text-primary flex items-center gap-space-2xs">
                        <MaterialSymbolsOutlined icon="verified" className="text-[16px] text-secondary" />
                        Dokumentasi Wajib 3 Tahap Pengawasan (Geotagged & Timestamped)
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Tim Pelaksana Kegiatan (TPK): {project.tpk}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                      {project.images.map((img, i) => (
                        <div key={i} className="bg-surface-container-low rounded-lg p-space-sm space-y-space-xs">
                          <div className="relative h-44 rounded overflow-hidden">
                            <img className="w-full h-full object-cover" data-alt={img.alt} src={img.src} />
                            <div className="absolute top-2 left-2 bg-primary text-on-primary px-space-xs py-space-2xs rounded font-label-sm text-label-sm shadow-sm">
                              {img.label}
                            </div>
                            <div className="absolute bottom-2 left-2 bg-on-background/80 text-surface-bright px-space-xs py-space-2xs rounded text-[10px] font-body-sm">
                              {img.date}
                            </div>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">{project.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {project.progress && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-center">
                    <div className="lg:col-span-4 rounded-lg overflow-hidden h-44 relative">
                      <img className="w-full h-full object-cover" data-alt={project.image.alt} src={project.image.src} />
                      <div className="absolute bottom-2 left-2 bg-primary/80 text-on-primary px-space-xs py-space-2xs rounded font-label-sm text-label-sm">
                        {project.image.label}
                      </div>
                    </div>
                    <div className="lg:col-span-8 space-y-space-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Estimasi Penyelesaian Lapangan: <span className="font-semibold text-primary">{project.estimasi}</span></span>
                        <span className="font-label-sm text-label-sm text-secondary font-bold">Progres Fisik 75% vs Rencana 70% (+5%)</span>
                      </div>
                      <div className="w-full bg-surface-container rounded-full h-3 overflow-hidden flex">
                        <div className="bg-secondary h-full" style={{ width: '75%' }}></div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs">
                        {project.progress.map((p, i) => (
                          <div key={i} className="p-space-xs rounded bg-surface-container-low">
                            <span className="font-label-sm text-label-sm text-on-surface-variant block">{p.name}</span>
                            <span className="font-body-sm text-body-sm font-semibold text-secondary">{p.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {mode === 'public' && (
        <section className="space-y-space-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-base bg-surface-container-low p-space-base rounded-xl">
            <div>
              <span className="font-headline-md text-headline-md text-primary flex items-center gap-space-xs">
                <MaterialSymbolsOutlined icon="campaign" className="text-[20px] text-secondary" />
                Infografis Transparansi Anggaran Publik
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Siap cetak untuk baliho fisik di depan kantor desa atau diekspor ke format digital warga.</p>
            </div>
            <div className="flex items-center gap-space-sm flex-wrap">
              <button className="px-space-base py-space-xs rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-on-secondary-container transition-all flex items-center gap-space-xs shadow-sm">
                <MaterialSymbolsOutlined icon="print" className="text-[18px]" />
                <span>Download File Cetak Baliho 3x2 Meter (PDF)</span>
              </button>
              <button className="px-space-md py-space-xs rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center gap-space-xs">
                <MaterialSymbolsOutlined icon="share" className="text-[18px]" />
                <span>Bagikan ke WhatsApp Warga</span>
              </button>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-space-xl shadow-md space-y-space-xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between gap-space-md pb-space-lg border-b border-surface-container">
              <div className="flex items-center gap-space-base">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center text-on-primary">
                  <MaterialSymbolsOutlined icon="balance" className="text-[32px]" />
                </div>
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">Transparansi Anggaran Keuangan Desa Sukamaju</span>
                  <h2 className="font-display-lg text-display-lg text-primary tracking-tight">ANGGARAN PENDAPATAN & BELANJA DESA (APBDes) TA 2024</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Ditetapkan melalui Peraturan Desa Sukamaju No. 04 Tahun 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-space-md bg-surface-container-low px-space-base py-space-sm rounded-xl">
                <div className="text-right">
                  <span className="font-label-sm text-label-sm text-on-surface-variant block">Total Volume APBDes 2024</span>
                  <span className="font-display-md text-display-md text-primary font-bold">Rp 1.780.500.000</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center">
                  <MaterialSymbolsOutlined icon="verified" className="text-[24px]" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
              <div className="lg:col-span-5 bg-surface-container-low p-space-lg rounded-xl space-y-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <MaterialSymbolsOutlined icon="savings" className="text-primary text-[20px]" />
                    <h4 className="font-headline-md text-headline-md text-primary">Sumber Pendapatan Desa</h4>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Total: Rp 1,78 Milyar</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-space-base justify-center py-space-xs">
                  <div className="relative w-44 h-44 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <circle className="text-surface-container" cx="18" cy="18" fill="none" r="15.915" stroke="currentColor" strokeWidth="4.2"></circle>
                      <circle className="text-primary" cx="18" cy="18" fill="none" r="15.915" stroke="currentColor" strokeDasharray="55.1, 100" strokeDashoffset="0" strokeWidth="4.2"></circle>
                      <circle className="text-secondary" cx="18" cy="18" fill="none" r="15.915" stroke="currentColor" strokeDasharray="34.8, 100" strokeDashoffset="-55.1" strokeWidth="4.2"></circle>
                      <circle className="text-on-tertiary-container" cx="18" cy="18" fill="none" r="15.915" stroke="currentColor" strokeDasharray="10.1, 100" strokeDashoffset="-89.9" strokeWidth="4.2"></circle>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Dana Transfer</span>
                      <span className="font-display-md text-display-md text-primary font-bold">89.9%</span>
                    </div>
                  </div>
                  <div className="space-y-space-xs flex-1">
                    <div className="flex items-center justify-between p-space-xs bg-surface-container-lowest rounded">
                      <div className="flex items-center gap-space-xs">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        <span className="font-label-sm text-label-sm text-on-surface">Dana Desa (APBN)</span>
                      </div>
                      <div className="text-right">
                        <span className="font-numeric-table text-numeric-table font-bold text-primary block">Rp 980,5 Jt</span>
                        <span className="text-[11px] text-on-surface-variant font-body-sm">55.1%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-space-xs bg-surface-container-lowest rounded">
                      <div className="flex items-center gap-space-xs">
                        <div className="w-3 h-3 rounded-full bg-secondary"></div>
                        <span className="font-label-sm text-label-sm text-on-surface">Alokasi Dana Desa (ADD)</span>
                      </div>
                      <div className="text-right">
                        <span className="font-numeric-table text-numeric-table font-bold text-secondary block">Rp 620,0 Jt</span>
                        <span className="text-[11px] text-on-surface-variant font-body-sm">34.8%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-space-xs bg-surface-container-lowest rounded">
                      <div className="flex items-center gap-space-xs">
                        <div className="w-3 h-3 rounded-full bg-on-tertiary-container"></div>
                        <span className="font-label-sm text-label-sm text-on-surface">Pendapatan Asli Desa (PADes)</span>
                      </div>
                      <div className="text-right">
                        <span className="font-numeric-table text-numeric-table font-bold text-tertiary-container block">Rp 180,0 Jt</span>
                        <span className="text-[11px] text-on-surface-variant font-body-sm">10.1%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant bg-surface-container-lowest p-space-sm rounded">
                  *PADes bersumber dari bagi hasil BUMDes Maju Bersama, sewa tanah kas desa, dan retribusi pasar desa.
                </p>
              </div>

              <div className="lg:col-span-7 bg-surface-container-low p-space-lg rounded-xl space-y-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <MaterialSymbolsOutlined icon="account_tree" className="text-primary text-[20px]" />
                    <h4 className="font-headline-md text-headline-md text-primary">Rencana Alokasi Belanja 5 Bidang (Total Rp 1,74 M)</h4>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary font-semibold">Surplus: Rp 38,5 Jt (SiLPA)</span>
                </div>
                <div className="space-y-space-sm">
                  {[
                    { no: '1', name: 'Pelaksanaan Pembangunan Desa', value: 'Rp 745.200.000 (42.8%)', color: 'bg-primary', desc: 'Drainase Dusun Cibitung, Jalan Pertanian, Sanitasi Warga' },
                    { no: '2', name: 'Penyelenggaraan Pemerintahan Desa', value: 'Rp 480.000.000 (27.5%)', color: 'bg-surface-tint', desc: 'Siltap & Tunjangan Kades, Perangkat Desa, Operasional BPD & RT/RW' },
                    { no: '3', name: 'Pembinaan Kemasyarakatan', value: 'Rp 195.000.000 (11.2%)', color: 'bg-secondary', desc: 'Posyandu Balita, Karang Taruna, Linmas Desa, Pelatihan PKK' },
                    { no: '4', name: 'Pemberdayaan Masyarakat Desa', value: 'Rp 210.800.000 (12.1%)', color: 'bg-on-secondary-container', desc: 'Bibit Pertanian Jagung, Pelatihan UMKM Kopi, Penguatan Modal BUMDes' },
                    { no: '5', name: 'Penanggulangan Bencana & Mendesak', value: 'Rp 111.000.000 (6.4%)', color: 'bg-outline', desc: 'Bantuan Langsung Tunai (BLT Dana Desa untuk 31 KPM Ekstrem)' },
                  ].map((item, i) => (
                    <div key={i} className="space-y-space-2xs bg-surface-container-lowest p-space-sm rounded-lg">
                      <div className="flex justify-between items-center text-body-sm">
                        <div className="flex items-center gap-space-xs">
                          <span className={`w-6 h-6 rounded ${i === 0 ? 'bg-primary-container text-on-primary' : i === 2 ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-container text-primary'} flex items-center justify-center font-label-sm text-label-sm`}>{item.no}</span>
                          <span className="font-headline-sm text-headline-sm text-primary">{item.name}</span>
                        </div>
                        <span className="font-numeric-table text-numeric-table font-bold text-primary">{item.value}</span>
                      </div>
                      <div className="w-full bg-surface-container rounded-full h-2.5 overflow-hidden">
                        <div className={`${item.color} h-full rounded-full`} style={{ width: item.value.split('(')[1]?.replace('%)', '') + '%' || '0%' }}></div>
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant block text-right">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary text-on-primary rounded-xl p-space-lg flex flex-col md:flex-row items-center justify-between gap-space-lg">
            <div className="flex items-center gap-space-md">
              <div className="w-24 h-24 bg-surface-container-lowest p-space-xs rounded-lg flex items-center justify-center shadow">
                <svg className="w-full h-full" fill="none" viewBox="0 0 100 100">
                  <rect fill="#002045" height="26" rx="3" width="26" x="5" y="5"></rect>
                  <rect fill="#ffffff" height="16" width="16" x="10" y="10"></rect>
                  <rect fill="#002045" height="8" width="8" x="14" y="14"></rect>
                  <rect fill="#002045" height="26" rx="3" width="26" x="69" y="5"></rect>
                  <rect fill="#ffffff" height="16" width="16" x="74" y="10"></rect>
                  <rect fill="#002045" height="8" width="8" x="78" y="14"></rect>
                  <rect fill="#002045" height="26" rx="3" width="26" x="5" y="69"></rect>
                  <rect fill="#ffffff" height="16" width="16" x="10" y="74"></rect>
                  <rect fill="#002045" height="8" width="8" x="14" y="78"></rect>
                  <rect fill="#002045" height="6" width="6" x="36" y="8"></rect>
                  <rect fill="#002045" height="6" width="6" x="48" y="8"></rect>
                  <rect fill="#002045" height="6" width="6" x="58" y="8"></rect>
                  <rect fill="#002045" height="6" width="6" x="36" y="20"></rect>
                  <rect fill="#002045" height="6" width="6" x="48" y="26"></rect>
                  <rect fill="#002045" height="6" width="6" x="8" y="38"></rect>
                  <rect fill="#002045" height="6" width="6" x="20" y="38"></rect>
                  <rect fill="#002045" height="6" width="6" x="36" y="38"></rect>
                  <rect fill="#002045" height="6" width="12" x="48" y="38"></rect>
                  <rect fill="#002045" height="6" width="6" x="68" y="38"></rect>
                  <rect fill="#002045" height="6" width="6" x="82" y="38"></rect>
                  <rect fill="#002045" height="6" width="18" x="36" y="50"></rect>
                  <rect fill="#002045" height="6" width="6" x="62" y="50"></rect>
                  <rect fill="#002045" height="6" width="8" x="80" y="50"></rect>
                  <rect fill="#002045" height="6" width="6" x="36" y="66"></rect>
                  <rect fill="#002045" height="6" width="6" x="48" y="66"></rect>
                  <rect fill="#002045" height="6" width="18" x="68" y="66"></rect>
                  <rect fill="#002045" height="6" width="18" x="36" y="78"></rect>
                  <rect fill="#002045" height="6" width="6" x="60" y="78"></rect>
                  <rect fill="#002045" height="6" width="12" x="74" y="78"></rect>
                </svg>
              </div>
              <div>
                <span className="font-label-sm text-label-sm text-on-primary-container uppercase tracking-wider block">Pindai QR Code via HP Warga</span>
                <span className="font-headline-sm text-headline-sm text-on-primary font-bold">Akses Transparansi Real-Time Portal Desa</span>
                <p className="font-body-sm text-body-sm text-on-primary/80 mt-space-2xs">Warga berhak mengetahui realisasi SPP kas & bukti kuitansi belanja tanpa dipungut biaya.</p>
              </div>
            </div>
            <div className="flex items-center gap-space-lg">
              <div className="text-right">
                <span className="font-label-sm text-label-sm text-on-primary-container block">Kepala Desa Sukamaju</span>
                <span className="font-headline-sm text-headline-sm text-on-primary font-bold">H. Ahmad Dahlan, S.Sos.</span>
                <span className="font-body-sm text-body-sm text-on-primary/70 block">NIPD: 19780512 201201 1 002</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-surface-container-lowest text-primary flex items-center justify-center font-headline-sm text-headline-sm shadow-md">
                <MaterialSymbolsOutlined icon="verified" className="text-[28px] text-secondary" />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
