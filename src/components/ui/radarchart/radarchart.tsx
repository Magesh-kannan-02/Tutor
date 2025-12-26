import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  type ChartOptions,
  type Plugin,
  type Chart,
  type Scale,
  type ScriptableContext,
} from "chart.js"
import { Radar } from "react-chartjs-2"

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
)

const roundedGridPlugin: Plugin<"radar"> = {
  id: "roundedGridPlugin",
  beforeDraw(chart: Chart<"radar">) {
    const { ctx, scales: { r } } = chart
    const scale = r as Scale & { getLabels: () => string[]; getDistanceFromCenterForValue: (v: number) => number; getPointPosition: (i: number, d: number) => { x: number; y: number } }

    if (!scale) return

    const numPoints = scale.getLabels().length
    const ticks = scale.ticks

    ctx.save()

    ticks.forEach((tick, index) => {
      // Skip 0 value if preferred, usually center point
      if (tick.value === 0 && Array.isArray(ticks) && ticks.length > 1) return

      //  getDistanceFromCenterForValue exists on RadialLinearScale
      const distanceFromCenter = scale.getDistanceFromCenterForValue(tick.value)

      ctx.beginPath()

      const isOuter = index === ticks.length - 1

      if (isOuter) {
        ctx.strokeStyle = "#C0C0C0"
        ctx.lineWidth = 1
      } else {
        ctx.strokeStyle = "#C0C0C0"
        ctx.lineWidth = 1 // Thicker inner grid lines
      }

      const positions = []
      for (let i = 0; i < numPoints; i++) {
        positions.push(scale.getPointPosition(i, distanceFromCenter))
      }

      if (positions.length < 3) return

      const cornerRadius = 26// Border radius for the grid lines

      const first = positions[0]
      const last = positions[positions.length - 1]

      const startX = (last.x + first.x) / 2
      const startY = (last.y + first.y) / 2

      ctx.moveTo(startX, startY)

      for (let i = 0; i < numPoints; i++) {
        const p = positions[i]
        const next = positions[(i + 1) % numPoints]

        ctx.arcTo(p.x, p.y, next.x, next.y, cornerRadius)
      }

      ctx.closePath()
      ctx.stroke()
    })

    ctx.restore()
  },
}

const customLabelsPlugin: Plugin<"radar"> = {
  id: "customLabelsPlugin",
  afterDraw(chart: Chart<"radar">) {
    const { ctx, scales: { r } } = chart
    if (!r) return;

    const simpleScale = r as Scale & { getDistanceFromCenterForValue: (v: number) => number; getPointPosition: (i: number, d: number) => { x: number; y: number } };
    const outerDistance = simpleScale.getDistanceFromCenterForValue(simpleScale.max);
    // We add some padding for the labels
    const labelDistance = outerDistance + 25;

    ctx.save();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const dataValues = chart.data.datasets[0].data as number[];
    const labels = chart.data.labels as string[];

    labels.forEach((label, index) => {
      const point = simpleScale.getPointPosition(index, labelDistance);
      const value = dataValues[index];

      // Draw Value (Green, Bold)
      ctx.font = "bold 20px sans-serif";
      ctx.fillStyle = "#B8FF5F";
      ctx.fillText(`${value}%`, point.x, point.y - 15);

      // Draw Label (Grey, Regular)
      ctx.font = "500 16px sans-serif";
      ctx.fillStyle = "#C0C0C0";
      ctx.fillText(label, point.x, point.y + 10);
    })

    ctx.restore();
  },
}

export const RadarChart = ({ ...rest }) => {
  const data = {
    labels: [
      "Speaking ",
      "Writing ",
      "Grammar/Vocab",
      "Listening ",
      "Reading "
    ],
    datasets: [
      {
        data: [75, 50, 70, 45, 85],

        fill: true,

        backgroundColor: (context: ScriptableContext<"radar">) => {
          const chart = context.chart
          const ctx = chart.ctx
          const scale = chart.scales.r as Scale & { yCenter: number; drawingArea: number }

          if (!scale) return "rgba(184,255,95,0.25)"

          const top = scale.yCenter - scale.drawingArea
          const bottom = scale.yCenter + scale.drawingArea

          //  LINEAR gradient 
          const gradient = ctx.createLinearGradient(
            0,
            top,
            0,
            bottom
          )

          // EXACT image-like stops
          gradient.addColorStop(0.0, "rgba(184,255,95,0.95)") // bright top
          gradient.addColorStop(0.25, "rgba(165,230,110,0.65)")
          gradient.addColorStop(0.55, "rgba(140,190,120,0.30)")
          gradient.addColorStop(0.75, "rgba(140,190,120,0.12)")
          gradient.addColorStop(1.0, "rgba(244, 245, 243, 0.02)") // fade bottom

          return gradient
        },

        borderColor: "#B8FF5F",
        borderWidth: 2,

        pointBackgroundColor: "#FFFFFF",
        pointBorderColor: "#FFFFFF",
        pointRadius: 5,
        pointHoverRadius: 6,
      },
    ]


  }

  const options: ChartOptions<"radar"> = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 50 // Ensure labels aren't cut off
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          display: false,
          stepSize: 25,
        },
        angleLines: {
          display: false,
        },
        grid: {
          display: false,
        },
        pointLabels: {
          display: false, // Hide default labels
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#0f0f0f",
        titleColor: "#B8FF5F",
        bodyColor: "#ffffff",
        padding: 10,
        callbacks: {
          title: (items) => {
            const index = items[0].dataIndex;
            return data.labels[index].split(' ')[0]; // Just show "Speaking" in tooltip title
          }
        }
      },
    },
  }

  return (
    <div style={{ height: "350px", width: "400px", backgroundColor: "#0f0f0f" }} {...rest}>
      <Radar
        data={data}
        options={options}
        plugins={[roundedGridPlugin, customLabelsPlugin]}
      />
    </div>
  )
}
