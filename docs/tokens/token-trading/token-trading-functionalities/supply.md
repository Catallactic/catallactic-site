---
sidebar_position: 2
---


# Supply





# Mint



| Token Type           | Strategy                               | Standalone              | Diamond                   |
|----------------------|----------------------------------------|-------------------------|---------------------------|
|                      | Mint on Token Creation + Fair Launch   | Use _mint               | Use _mint                 |
|                      | Mint on Token Creation + ICO           | _mint + burn in ICO     | _mint + burn in ICO       |
| No Mintable Token    | Mint on Automatic LP Management        | Use _mint               | Use _mint                 |
|                      | Mint on Automatic Price Capture        | Use _mint               | Use _mint                 |
|                      | Mint on Automatic Value Capture        | Use _mint               | Use _mint                 |
|                      | Mint by Contract on ICO Purchase       | Public mint method      | Add mint to ICO           |
|                      | Mint by Contract on ICO Claim          | Public mint method      | Add mint to ICO           |
|                      | Mint by Contract on ICO Claims         | Public mint method      | Add mint to ICO           |
| Mintable Token       | Mint by Contract on Vesting Completion | Public mint method      | Add mint to Vesting       |
|                      | Mint by Contract on Operations         | Public mint method      | Add mint to Operation     |
|                      | FlashMint                              | Public mint method      | Public op mint method     |
|                      | Manual Mint by Issuer                  | Public mint method      | Public mint method        |



This translates in 3 minting possibilities:

- Use _mint only from erc-20 for fixed supply (no change required)

- Add mint to ICO / vesting / operations for diamond since the shared storage of the diamond solves the problem of exposing the mint on the token (add mint to othr parts)

- Add a public mint method for standalone on diamond with manual intervention (add mint() to token, this case should be avoided)

# Burn


# ERC-621