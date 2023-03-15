import React, { createContext } from 'react';
import { CountryProperties } from '../interfaces/Task';

export const CountryContext = createContext<CountryProperties[]>([]);