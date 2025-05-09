import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// may 5th at 7pm EEST - use lib to check exact time
const openDateTime = new Date('2025-05-05T19:00:00+03:00');

function checkOpen() {
  const now = new Date();
  return now >= openDateTime;
}

export function RegistrationButton({
  href,
  monthNumber,
  startDay,
  endDay,
  closed
}) {
  const { locale } = useRouter();
  const date = new Date(new Date().getFullYear(), monthNumber, startDay);
  const [isOpen, setIsOpen] = useState(checkOpen());

  const month = new Intl.DateTimeFormat(locale, { month: 'short' })
    .format(date)
    .toUpperCase();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsOpen(checkOpen());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const open = isOpen && !closed;

  return (
    <a
      className="register"
      target="_blank"
      rel="noopener noreferrer"
      href={open ? href : '#'}
      disabled={!open}
    >
      <button
        disabled={!open}
        style={{
          cursor: open ? 'pointer' : 'not-allowed'
        }}
      >
        {locale === 'hu'
          ? `REGISZTRÁCIÓ ${
              open ? 'NYITVA' : 'ZÁRVA'
            } | ${month} ${startDay}-${endDay}`
          : `REGISTRATION ${
              open ? 'OPEN' : 'CLOSED'
            } | ${month} ${startDay}-${endDay}`}
      </button>
    </a>
  );
}
