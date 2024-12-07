import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

export default function FormChart({
  data,
}: {
  data: [{ date: string; submissions: number }];
}) {
  return (
    <Card className="mt-4 bg-slate-800 border-2 border-solid border-gray-800">
      <CardHeader>
        <CardTitle className="text-white">Submissions per day</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            default: {
              label: "Submissions",
              color: "#2563EB",
            },
          }}
          className="min-h-[200px] w-full px-4 bg-transparent rounded-md"
        >
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return value.split("T")[0];
              }}
              className="text-white text-lg"
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="submissions" fill="#2563EB" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
