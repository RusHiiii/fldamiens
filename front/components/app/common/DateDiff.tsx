import { useMemo } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

type DateProps = {
  dateFrom: string;
  dateTo?: string;
}
const DateDiff = ({ dateFrom, dateTo }: DateProps) => {
  const formattedDate = useMemo(() => {
    let formattedDateTo = dayjs().locale('fr');
    if (dateTo) {
      formattedDateTo = dayjs(dateTo).locale('fr');
    }

    let formattedDateFrom = dayjs(dateFrom).locale('fr');

    let yearDiff = formattedDateTo.diff(formattedDateFrom, 'year');
    let monthDiff = formattedDateTo.diff(formattedDateFrom, 'month');

    return {
      year: yearDiff,
      month: monthDiff % 12
    };
  }, [dateFrom, dateTo]);

  if (formattedDate.year === 0) {
    return <>({formattedDate.month} mois)</>
  }

  if (formattedDate.year === 1) {
    if (formattedDate.month === 0) {
      return <>({formattedDate.year} an)</>
    }

    return <>({formattedDate.year} an {formattedDate.month} mois)</>
  }

  if (formattedDate.month === 0) {
    return <>({formattedDate.year} ans)</>
  }

  return <>({formattedDate.year} ans {formattedDate.month} mois)</>;
}

export default DateDiff;