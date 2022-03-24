import { Card, Box, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import StatisticsChart from './StatisticsChart';

const StatisticsChartWrapper = styled(StatisticsChart)(
  ({ theme }) => `
        height: 130px;
`
);

function StatisticsGraph() {

  const price = {
    week: {
      labels: [
        'Monday',
        'Tueday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      data: [55.701, 57.598, 48.607, 46.439, 58.755, 46.978, 58.16, 55.701, 57.598, 48.607, 46.439, 58.755, 46.978, 58.16]
    }
  };

  return (
    <Card>
      <Box sx={{ p: 3 }}>
          <Box>
            <Typography variant="h4" noWrap>
            Statistics
            </Typography>
        </Box>
      </Box>
      <Box height={130} sx={{ ml: -1.5 }}>
        <StatisticsChartWrapper
          data={price.week.data}
          labels={price.week.labels}
        />
      </Box>
    </Card>
  );
}

export default StatisticsGraph;
