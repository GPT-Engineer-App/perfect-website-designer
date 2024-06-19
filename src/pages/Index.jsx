import { Container, Text, VStack, Box, Button, Tabs, TabList, Tab, SimpleGrid, GridItem } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" bg="black" color="white" minH="100vh" p={4}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={8}>
        <Text fontSize="2xl" fontFamily="sans-serif">GPT Engineer</Text>
        <Box display="flex" gap={4}>
          <Text fontSize="sm" fontFamily="sans-serif">Docs</Text>
          <Text fontSize="sm" fontFamily="sans-serif">Kristian Ruiz Kyvik</Text>
        </Box>
      </Box>

      {/* Main Section */}
      <VStack spacing={4} align="start" mb={8}>
        <Text fontSize="4xl" fontFamily="sans-serif">What do you want to build?</Text>
        <Text fontSize="md" fontFamily="sans-serif">ecreate this website</Text>
        <Text fontSize="sm" fontFamily="sans-serif">
          Make sure to list all their elements as an indented list, with their relative sizes, colours, fonts, images other important details so that it matches perfectly before starting.
        </Text>
        <Button fontSize="sm" color="white" bg="gray" fontFamily="sans-serif">Configure</Button>
      </VStack>

      {/* Project Section */}
      <Tabs variant="unstyled" mb={8}>
        <TabList>
          <Tab fontSize="sm" fontFamily="sans-serif" _selected={{ color: "white", borderBottom: "2px solid white" }}>My Projects</Tab>
          <Tab fontSize="sm" fontFamily="sans-serif" _selected={{ color: "white", borderBottom: "2px solid white" }}>Featured</Tab>
          <Tab fontSize="sm" fontFamily="sans-serif" _selected={{ color: "white", borderBottom: "2px solid white" }}>Latest</Tab>
        </TabList>
      </Tabs>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
        {[
          { name: "mt4-trading-bot-generator", time: "Created 9 seconds ago by Kent Egret" },
          { name: "csv-manager", time: "Created 5 minutes ago by Bao Lam" },
          { name: "flawless-link-fca-customer-ids", time: "Created 28 minutes ago by Rohit Mukherjee" },
          { name: "youtube-replica-logo", time: "Created 31 minutes ago by Isaak Sundemann" },
          { name: "task-buddy-02", time: "Created 42 minutes ago by Mårten Wiman" },
          { name: "shift-schedule-master", time: "Created 1 hour ago" },
          { name: "data-csv-editor", time: "Created 1 hour ago" },
          { name: "chores-helper", time: "Created 2 hours ago by Mårten Wiman" },
          { name: "trending-content-page", time: "Created 2 hours ago" },
          { name: "simply-do", time: "Created 2 hours ago" },
          { name: "math-helper", time: "Created 2 hours ago" },
          { name: "react-calc", time: "Created 2 hours ago" },
        ].map((project, index) => (
          <GridItem key={index} bg="gray.700" p={4} borderRadius="md">
            <Text fontSize="sm" fontFamily="sans-serif">{project.name}</Text>
            <Text fontSize="xs" fontFamily="sans-serif" color="gray.400">{project.time}</Text>
          </GridItem>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;