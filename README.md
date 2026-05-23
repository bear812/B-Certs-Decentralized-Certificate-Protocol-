# B-Certs Frontend

Frontend application for B-Certs — a decentralized certificate verification platform built with Web3 and blockchain technology.

## Overview

B-Certs aims to modernize academic and professional certificate verification by leveraging blockchain technology to provide transparency, security, and tamper-proof verification.

This frontend application provides an intuitive interface for students, universities, organizations, and employers to issue, manage, and verify digital certificates.

---

# Features

- Modern responsive UI
- Certificate verification system
- QR code verification
- Wallet authentication
- Student dashboard
- University/Admin dashboard
- Blockchain transaction integration
- Certificate status tracking
- Web3-ready architecture

---

# Tech Stack

## Frontend

- Next.js
- React
- Tailwind CSS
- TypeScript
- Ethers.js
- Web3Auth / MetaMask Integration

---

# System Roles

## Student

- View owned certificates
- Verify certificate authenticity
- Share certificates using QR codes

## University / Organization

- Issue certificates
- Manage certificate records
- Track issuance history

## Employer / HR

- Verify certificate validity
- Scan QR codes
- Check blockchain verification status

---

# Project Structure

```bash
src/
 ├── app/
 ├── components/
 ├── pages/
 ├── services/
 ├── hooks/
 ├── styles/
 ├── utils/
 └── blockchain/
```

---

# Installation

```bash
git clone https://github.com/your-repo/bcerts-frontend.git

cd bcerts-frontend

npm install

npm run dev
```

---

# Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_CONTRACT_ADDRESS=
NEXT_PUBLIC_CHAIN_ID=
```

---

# Blockchain Integration

The frontend communicates with smart contracts for:

- Certificate issuance
- Certificate verification
- Hash validation
- Transaction tracking

Blockchain interactions are handled using Ethers.js.

---

# Future Improvements

- Multi-chain support
- NFT-based certificates
- Decentralized storage integration (IPFS)
- Mobile application
- LinkedIn-style credential profile
- AI-powered fraud detection

---

# Objectives

The project focuses on:

- Improving certificate transparency
- Preventing document forgery
- Simplifying verification processes
- Building trust through decentralized infrastructure

---

# License

MIT License
