# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# Irys DEX

A modern decentralized exchange (DEX) interface built with React and Vite, featuring token swapping functionality and Irys network integration for decentralized data storage.

## 🚀 Features

- **Token Swapping Interface**: Clean and intuitive UI for token exchanges
- **Wallet Connection**: MetaMask integration with Ethers.js v6
- **Irys Network Integration**: Decentralized data upload capabilities
- **Multi-token Support**: Support for popular ERC-20 tokens (USDC, LINK, USDT, DAI, WETH, WBTC, etc.)
- **Slippage Control**: Customizable slippage tolerance (0.5%, 2.5%, 5%)
- **Responsive Design**: Modern dark theme with smooth animations
- **Route Management**: Multi-page navigation with React Router

## 🛠 Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: CSS with Ant Design components
- **Blockchain**: Ethers.js 6.15.0
- **Data Storage**: Irys Web Upload
- **Routing**: React Router DOM 7.9.2
- **HTTP Client**: Axios

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd irys-vite
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🌐 Pages

### Swap (`/`)
- Main trading interface
- Token selection modal
- Amount input with formatting
- Slippage settings
- Real-time token switching

### Stake (`/stake`)
- Staking interface (coming soon)

## 🔗 Wallet Integration

The application supports:
- MetaMask wallet connection
- Ethereum network interaction
- Automatic wallet address display
- Irys network connectivity

### Connecting Your Wallet

1. Click the "Connect" button in the header
2. Approve MetaMask connection
3. Your wallet address will appear in truncated format
4. Irys connection is established automatically

## 💱 Supported Tokens

The DEX currently supports the following tokens:

| Token | Name | Decimals |
|-------|------|----------|
| IRYS | USD Coin | 6 |
| SIRYS | Staked Irys | 18 |
| USDT | Tether USD | 6 |
| GUSD | Gemini USD | 2 |
| DAI | Dai Stablecoin | 18 |
| WETH | Wrapped Ethereum | 18 |
| WBTC | Wrapped Bitcoin | 8 |

## ⚙️ Configuration

### Slippage Tolerance
Users can configure slippage tolerance through the settings menu:
- 0.5% - Low slippage, may fail in volatile conditions
- 2.5% - Balanced (default)
- 5.0% - High tolerance for volatile markets

### Environment Setup
The application uses browser-compatible polyfills for Node.js modules:
- `crypto-browserify`
- `stream-browserify`
- `path-browserify`
- `os-browserify`

## 🎨 Styling

The application features a modern dark theme with:
- Gradient backgrounds
- Smooth hover animations
- Responsive design
- Custom Ant Design component styling
- CSS custom properties for consistent theming

## 🔐 Security Features

- Client-side wallet connection only
- No private key storage
- MetaMask transaction approval required
- Ethers.js security best practices

## 🚧 Development

### Project Structure
```
src/
├── components/
│   ├── Header.jsx      # Navigation and wallet connection
│   ├── Swap.jsx        # Main trading interface
│   └── Stake.jsx       # Staking interface
├── assets/
│   ├── tokenList.json  # Token configuration
│   └── react.svg       # React logo
├── App.jsx             # Main application component
├── App.css            # Application styles
├── index.css          # Global styles
└── main.jsx           # Application entry point
```

### Adding New Tokens

To add a new token, update `src/assets/tokenList.json`:

```json
{
  "ticker": "TOKEN",
  "img": "https://token-image-url.com/token.png",
  "name": "Token Name",
  "address": "0x...",
  "decimals": 18
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔮 Future Enhancements

- [ ] Real-time price feeds
- [ ] Transaction history
- [ ] Advanced charting
- [ ] Liquidity pool creation
- [ ] Yield farming
- [ ] Cross-chain swaps
- [ ] Mobile app version

## ⚠️ Disclaimer

This is a demonstration application. Always verify smart contract addresses and exercise caution when trading real tokens. Never share your private keys or seed phrases.

## 📞 Support

For support and questions, please open an issue in the GitHub repository or contact the development team.

---

Built with ❤️ using React, Vite, and the Irys Network.