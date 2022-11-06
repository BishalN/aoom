import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
} from "@mantine/core";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
}));

export function Hero() {
  const { classes } = useStyles();
  const router = useRouter();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Aoom <br />
              Loom for your audio
            </Title>
            <Text color="dimmed" mt="md">
              Aoom is a free, open-source, and privacy-focused audio recording
              and sharing platform.
            </Text>

            <Group mt={30}>
              <Button
                radius="xl"
                size="md"
                onClick={() => router.push("/login")}
                className={classes.control}
              >
                Record your first audio
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Source code
              </Button>
            </Group>
          </div>
          <Image src="/hero.svg" className={classes.image} />
        </div>
      </Container>
    </div>
  );
}
