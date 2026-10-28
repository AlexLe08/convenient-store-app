'use client'

import { useState } from 'react'
import { Header } from 'convenient-store-header-library'
import type { SearchSuggestion } from 'convenient-store-enterprise-ui-library'
import styles from './HomePage.module.css'

interface Product {
  id: string
  label: string
  price: number
  category: string
  imageUrl: string
}

const PRODUCTS: Product[] = [
  { id: 'p1', label: 'iPhone 15 Pro', price: 999, category: 'Phones', imageUrl: 'https://placehold.co/400x400/e0e7ff/3730a3?text=iPhone+15+Pro' },
  { id: 'p2', label: 'iPhone 15', price: 799, category: 'Phones', imageUrl: 'https://placehold.co/400x400/e0e7ff/3730a3?text=iPhone+15' },
  { id: 'p3', label: 'Samsung Galaxy S24', price: 899, category: 'Phones', imageUrl: 'https://placehold.co/400x400/dbeafe/1e40af?text=Galaxy+S24' },
  { id: 'p4', label: 'Google Pixel 8', price: 699, category: 'Phones', imageUrl: 'https://placehold.co/400x400/dbeafe/1e40af?text=Pixel+8' },
  { id: 'p5', label: 'iPad Air', price: 599, category: 'Tablets', imageUrl: 'https://placehold.co/400x400/d1fae5/065f46?text=iPad+Air' },
  { id: 'p6', label: 'MacBook Pro 14"', price: 1999, category: 'Laptops', imageUrl: 'https://placehold.co/400x400/fef3c7/92400e?text=MacBook+Pro' },
  { id: 'p7', label: 'Sony WH-1000XM5', price: 399, category: 'Audio', imageUrl: 'https://placehold.co/400x400/fce7f3/9d174d?text=WH-1000XM5' },
  { id: 'p8', label: 'AirPods Pro', price: 249, category: 'Audio', imageUrl: 'https://placehold.co/400x400/fce7f3/9d174d?text=AirPods+Pro' }
]

const SUGGESTIONS: SearchSuggestion[] = PRODUCTS.map((p) => ({
  id: p.id,
  label: p.label,
  category: p.category,
  keywords: [p.category.toLowerCase()]
}))

const NAV_LINKS = [
  { id: 'deals', label: 'Deals', href: '#deals' },
  { id: 'new', label: 'New Arrivals', href: '#new' },
  { id: 'support', label: 'Support', href: '#support' }
]

export function HomePage() {
  const [query, setQuery] = useState('')
  const [cartCount, setCartCount] = useState(0)

  const filtered = query
    ? PRODUCTS.filter((p) =>
        p.label.toLowerCase().includes(query.toLowerCase())
      )
    : PRODUCTS

  return (
    <>
      <Header
        brandName="Convenient Store"
        navLinks={NAV_LINKS}
        cartCount={cartCount}
        onCartClick={() => alert(`Cart has ${cartCount} items`)}
        onAccountClick={() => alert('Account clicked')}
        searchProps={{
          suggestions: SUGGESTIONS,
          placeholder: 'Search products…',
          'aria-label': 'Search products',
          minQueryLength: 1,
          onSearch: (q) => setQuery(q)
        }}
      />

      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>
            {query ? `Results for "${query}"` : 'Featured Products'}
          </h1>
          {query && (
            <button
              type="button"
              className={styles.clearButton}
              onClick={() => setQuery('')}
            >
              Clear search
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <p className={styles.empty}>No products match &ldquo;{query}&rdquo;.</p>
        ) : (
          <div className={styles.grid}>
            {filtered.map((product) => (
              <article key={product.id} className={styles.card}>
                <img src={product.imageUrl} alt="" className={styles.cardImage} />
                <div className={styles.cardBody}>
                  <span className={styles.cardCategory}>{product.category}</span>
                  <h3 className={styles.cardLabel}>{product.label}</h3>
                  <span className={styles.cardPrice}>${product.price}</span>
                  <button
                    type="button"
                    className={styles.addButton}
                    onClick={() => setCartCount((c) => c + 1)}
                  >
                    Add to cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </>
  )
}