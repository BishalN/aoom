import {
  AppShell,
  Button,
  Container,
  Navbar,
  Stack,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { footerLinks, tabs, user } from "../api/constants";
import { CustomNavbar } from "../components/CustomNavbar";
import { DashboardGrid } from "../components/DashboardGrid";
import { Footer } from "../components/Footer";
import { useMe } from "../context/me";

function Dashboard() {
  const me = useMe();
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <div>
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
        navbar={<CustomNavbar />}
        footer={<Footer links={footerLinks} />}
      >
        <Stack py="xs">
          <Title>Welcome back {me.user.username}!</Title>
          <Button w="120px">New Recording</Button>
        </Stack>
        <DashboardGrid />
      </AppShell>
    </div>
  );
}

export default Dashboard;
