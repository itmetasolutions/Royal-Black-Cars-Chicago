export const Check = (p) => (<svg viewBox="0 0 20 20" aria-hidden="true" {...p}><path d="M8 14.5 3.8 10.3l1.4-1.4L8 11.7l6.8-6.8 1.4 1.4z" /></svg>);
export const Star = (p) => (<svg viewBox="0 0 20 20" aria-hidden="true" {...p}><path d="m10 1.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.9 4.8 17.6l1-5.8L1.6 7.7l5.8-.8z" /></svg>);
export const Car = (p) => (<svg viewBox="0 0 24 24" aria-hidden="true" {...p}><path d="M3 15v-3.2L5.2 7A2 2 0 0 1 7 6h10a2 2 0 0 1 1.8 1L21 11.8V15h-2.1a3 3 0 0 0-5.8 0h-2.2a3 3 0 0 0-5.8 0H3Zm3.4-4h11.2l-1.6-3H8Z" /></svg>);
export const Seat = (p) => (<svg viewBox="0 0 20 20" aria-hidden="true" {...p}><circle cx="10" cy="6" r="3" /><path d="M4 17c0-3.3 2.7-5 6-5s6 1.7 6 5" /></svg>);
export const Bag = (p) => (<svg viewBox="0 0 20 20" aria-hidden="true" {...p}><path d="M4 7h12v9H4z" /><path d="M8 7V4h4v3" /></svg>);
export const Stars = () => (<div className="st">{[0,1,2,3,4].map(i => <Star key={i} />)}</div>);
