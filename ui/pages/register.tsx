import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification, updateNotification } from "@mantine/notifications";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { registerUser } from "../api";

export default function Auth() {
  const router = useRouter();
  const form = useForm({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validateInputOnBlur: true,
    validate: {
      email: (value) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!value) return "Email is required";
        if (!value.match(emailRegex)) return "Email is not valid";
      },
      username: (value) => {
        if (!value) return "Username is required";
        if (value.length < 3) return "Username must be at least 3 characters";
      },

      password: (value, values) => {
        if (!value) return "Password is required";
        if (value !== values.confirmPassword) return "Passwords do not match";
      },
      confirmPassword: (value, values) => {
        if (value !== values.password) return "Passwords do not match";
      },
    },
  });

  const mutation = useMutation<
    string,
    AxiosError,
    Parameters<typeof registerUser>["0"]
  >(registerUser, {
    onMutate: () => {
      showNotification({
        id: "register",
        title: "Creating account",
        message: "Please wait...",
        loading: true,
      });
    },
    onSuccess: () => {
      updateNotification({
        id: "register",
        title: "Success",
        message: "Successfully created account",
      });

      router.push("/login");
    },
    onError: (e) => {
      updateNotification({
        id: "register",
        title: "Error",
        message: e.response?.data as string,
      });
    },
  });
  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Welcome!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Already have an account?{" "}
        <Anchor<"a"> href="#" size="sm" onClick={() => router.push("/login")}>
          login
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit((values) => mutation.mutate(values))}>
          <TextInput
            label="Email"
            {...form.getInputProps("email")}
            placeholder="you@mantine.dev"
            required
          />
          <TextInput
            {...form.getInputProps("username")}
            label="Username"
            placeholder="bishal"
            required
          />
          <PasswordInput
            {...form.getInputProps("password")}
            label="Password"
            placeholder="Your password"
            required
            mt="md"
          />
          <PasswordInput
            {...form.getInputProps("confirmPassword")}
            label="Confirm Password"
            placeholder="Your password"
            required
            mt="md"
          />
          <Group position="apart" mt="md">
            <Checkbox label="Remember me" />
            <Anchor<"a">
              onClick={(event) => event.preventDefault()}
              href="#"
              size="sm"
            >
              Forgot password?
            </Anchor>
          </Group>
          <Button type="submit" fullWidth mt="xl">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
