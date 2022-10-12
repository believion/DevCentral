import { Card, Image, Text, Badge, Button, Group, Container, Avatar } from '@mantine/core';

export default function Infocard(props: any) {
  return (
    <Container size={600} m="md">
    <Card shadow="sm" p="xl" radius="md" withBorder>

      <Group position="apart" mt="xs" mb="xs">
        <Group>
      <Avatar src={null} alt="no image here" color="indigo" />
        <Text weight={500}>{props.id}</Text>
        </Group>
        <Badge color="pink" variant="light">
          {props.posttype}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {props.children}
      </Text>

      <Group mt="md" style={{display: "flex", alignItems: "center"}}>
      <Button variant="light" color="blue" radius="md">
        Like
      </Button>
      <Button>Dislike</Button>
      <Button>Share</Button>
      </Group>
    </Card>
    </Container>
  );
}