import {
  Section,
  Container,
  Title,
  Text,
  ToMainLink,
  Icon,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <Section>
      <Container>
        <Title>404</Title>
        <Text>Ooops, page not found...</Text>
        <ToMainLink to="/">
          <Icon size="18px" />
          To main page
        </ToMainLink>
      </Container>
    </Section>
  );
};

export default NotFound;
