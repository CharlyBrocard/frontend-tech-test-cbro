import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FlexBox, Thumbnail, TextField, Theme } from "@lumx/react";
import { mdiMagnify } from "@lumx/icons";

import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";

export const Header: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [queryName, setQueryName] = useState(searchParams.get("name") || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = queryName.trim();
    const params = new URLSearchParams({ page: "1" });
    if (trimmed) params.set("name", trimmed);
    navigate(`/?${params}`);
  };

  return (
    <header className={styles.header}>
      <FlexBox
        className={styles.logo}
        orientation="horizontal"
        vAlign="space-between"
        hAlign="center"
      >
        <Thumbnail image={logo} className={styles.logo} alt="My Static App Logo" />
        <form className={styles.searchForm} onSubmit={handleSubmit} role="search">
          <TextField
            theme={Theme.light}
            icon={mdiMagnify}
            value={queryName}
            onChange={(value: string) => setQueryName(value)}
            label="Search"
          />
        </form>
      </FlexBox>
    </header>
  );
};
