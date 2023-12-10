import { useMemo } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';

type DateProps = {
  date: string;
  format: string;
}
const Date = ({ date, format }: DateProps) => {
  const formattedDate = useMemo(() => {
    if (!date) {
      return '';
    }

    let formattedDate = dayjs(date).locale('fr');

    return formattedDate.format(format);
  }, [date, format]);

  return <>{formattedDate}</>;
}

export default Date;