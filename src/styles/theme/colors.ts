import { ColorHues } from '@chakra-ui/core';

export type IColors = Record<
  string,
  string | Record<string, string | ColorHues>
>;

export const colors: IColors = {};
