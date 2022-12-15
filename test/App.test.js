import { render, screen } from '@testing-library/react';
import App from '../src/App'

test('App Test', () => {
    render(<App />);
    screen.debug();
});
