import { useState } from "react";
import {
  AppShell,
  Burger,
  Button,
  Header,
  MediaQuery,
  Stack,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { CustomNavbar } from "../components/CustomNavbar";
import { DashboardGrid } from "../components/DashboardGrid";
import { useMe } from "../context/me";

export default function AppShellDemo() {
  const me = useMe();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<CustomNavbar hidden={opened} />}
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Title>Aoom</Title>
          </div>
        </Header>
      }
    >
      <Stack py="xs">
        <Title>Welcome back {me.user.username}!</Title>
        <Button w="120px">New Recording</Button>
      </Stack>
      <DashboardGrid />
    </AppShell>
  );
}
