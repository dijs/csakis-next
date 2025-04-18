import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// may 5th at 7pm EEST - use lib to check exact time
const openDateTime = new Date('2025-05-05T19:00:00+03:00');

function checkOpen() {
  const now = new Date();
  return now >= openDateTime;
}

function RegistrationButton({ href, monthNumber, startDay, endDay }) {
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

  return (
    <a
      className="register"
      target="_blank"
      rel="noopener noreferrer"
      href={isOpen ? href : '#'}
      disabled={!isOpen}
    >
      <button disabled={!isOpen}>
        {locale === 'hu'
          ? `REGISZTRÁCIÓ ${
              isOpen ? 'NYITVA' : 'ZÁRVA'
            } | ${month} ${startDay}-${endDay}`
          : `REGISTRATION ${
              isOpen ? 'OPEN' : 'CLOSED'
            } | ${month} ${startDay}-${endDay}`}
      </button>
    </a>
  );
}

export default function Register() {
  return (
    <div>
      <RegistrationButton href="#" monthNumber={6} startDay={22} endDay={26} />
      <RegistrationButton href="#" monthNumber={7} startDay={5} endDay={9} />
      <RegistrationButton href="#" monthNumber={7} startDay={26} endDay={30} />
    </div>
  );
}
