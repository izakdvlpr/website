import {
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  HStack,
  VStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { timelineList } from '@data/timeline';

export function Timeline(): JSX.Element {
  const theme = {
    lineColor: useColorModeValue('black', 'white'),
    connectDotsColor: useColorModeValue('black', 'white'),
    dotColor: useColorModeValue('black', 'white'),
  };

  return (
    <Box id="skils" borderBottomWidth="1px">
      <Flex
        w="100%"
        maxW={1240}
        px={{ base: 10, md: 48 }}
        m="6rem auto"
        flexDir="column"
      >
        <Heading
          as="h3"
          size="lg"
          position="relative"
          sx={{
            '&:after': {
              width: '80px',
              height: '4px',
              marginRight: '1rem',
              position: 'absolute',
              content: '""',
              bottom: '-10px',
              display: 'block',
              backgroundColor: theme.lineColor,
            },
          }}
        >
          Timeline
        </Heading>

        <List mt={10}>
          {timelineList.map(({ year, achievements }) => (
            <ListItem key={year}>
              <Heading as="h4" size="md">
                {year}
              </Heading>

              <List paddingBottom={4}>
                {achievements.map(({ title, description }, index) => {
                  const isLastElement = index === achievements.length - 1;
                  const isFirstElement = index === 0;
                  const shouldConnectDots = achievements.length > 1;

                  return (
                    <ListItem
                      key={title}
                      zIndex={1}
                      paddingTop={4}
                      position="relative"
                    >
                      {shouldConnectDots && (
                        <Flex
                          left="5px"
                          top={isFirstElement ? 5 : 0}
                          width="2.5px"
                          bottom={0}
                          height={isLastElement ? 5 : 'unset'}
                          zIndex={-1}
                          position="absolute"
                          backgroundColor={theme.connectDotsColor}
                        />
                      )}

                      <HStack
                        width="full"
                        alignItems="flex-start"
                        justifyContent="flex-start"
                      >
                        <Box
                          minWidth="14px"
                          height="14px"
                          marginTop={1}
                          borderRadius="full"
                          bg={theme.dotColor}
                        />

                        <VStack width="full" spacing={2} textAlign="left">
                          <Heading as="h5" size="md" width="full">
                            {title}
                          </Heading>

                          {description && (
                            <Text as="p" size="sm" width="full">
                              {description}
                            </Text>
                          )}
                        </VStack>
                      </HStack>
                    </ListItem>
                  );
                })}
              </List>
            </ListItem>
          ))}
        </List>
      </Flex>
    </Box>
  );
}
