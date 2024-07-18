import { Helmet } from 'react-helmet-async'

import { IncomeChart } from './income-chart'
import { MonthlyIncomeCard } from './monthly-income-card'
import { CanceledMonthlyOrdersCard } from './mothly-canceled-orders-card'
import { PopularProductsChart } from './popular-products-chat'
import { TotalDailyOrdersCard } from './total-daily-orders-card'
import { TotalMonthlyOrdersCard } from './total-monthly-orders-card'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthlyIncomeCard />
          <TotalMonthlyOrdersCard />
          <TotalDailyOrdersCard />
          <CanceledMonthlyOrdersCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <IncomeChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
