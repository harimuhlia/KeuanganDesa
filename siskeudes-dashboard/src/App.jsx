import Sidebar from './components/Sidebar'
import Header from './components/Header'
import OperationalContextHeader from './components/OperationalContextHeader'
import KPICards from './components/KPICards'
import RevenueChart from './components/RevenueChart'
import ExpenseDonutChart from './components/ExpenseDonutChart'
import ApprovalTable from './components/ApprovalTable'
import ComplianceWidget from './components/ComplianceWidget'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="pl-64">
        <Header />
        <main className="relative pt-16 bg-surface w-full px-space-lg py-space-lg min-h-screen">
          <div className="flex flex-col w-full gap-space-lg">
            <OperationalContextHeader />
            <KPICards />
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
              <RevenueChart />
              <ExpenseDonutChart />
            </section>
            <section className="grid grid-cols-1 xl:grid-cols-12 gap-space-md">
              <ApprovalTable />
              <ComplianceWidget />
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
