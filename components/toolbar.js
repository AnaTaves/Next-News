import { useRouter } from "next/router";
import Link from "next/link";

import * as S from "../styles/Toolbar.styles";

export const Toolbar = ({ toggleTheme }) => {
  const router = useRouter();

  return (
    <S.NavBar>
      <S.NavLinks>
        <li>
          {" "}
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/feed/1">Feed</Link>
        </li>
        <li>
          {" "}
          <Link href="/eom">EOM</Link>
        </li>
        <li>
          {" "}
          <Link href="https://twitter.com/portexe">Twitter</Link>
        </li>
      </S.NavLinks>
      <S.SwitchContainer>
        <S.Switch
          src="/day-and-night.svg"
          alt="toggle theme"
          onClick={toggleTheme}
        />
      </S.SwitchContainer>
    </S.NavBar>
  );
};
