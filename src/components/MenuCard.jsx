export const menuData = [
  {
    category: 'Popular',
    items: [
      { name: 'Spaghetti Carbonara', desc: 'Creamy egg sauce, pancetta & parmesan', price: '$18', img: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400' },
      { name: 'Margherita Pizza', desc: 'San Marzano tomato, fior di latte, basil', price: '$16', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400' },
      { name: 'Osso Buco', desc: 'Braised veal shank with gremolata & risotto', price: '$28', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400' },
      { name: 'Bruschetta al Pomodoro', desc: 'Toasted bread with fresh tomatoes & basil', price: '$8', img: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400' },
    ],
  },
  {
    category: 'Breakfast',
    items: [
      { name: 'Eggs Benedict', desc: 'Poached eggs, hollandaise, Canadian bacon', price: '$14', img: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400' },
      { name: 'Avocado Toast', desc: 'Sourdough, smashed avocado, poached egg', price: '$12', img: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=400' },
      { name: 'French Crepes', desc: 'Thin crepes with berries and cream', price: '$10', img: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400' },
      { name: 'Caprese Salad', desc: 'Fresh mozzarella, tomatoes & basil drizzle', price: '$10', img: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400' },
    ],
  },
  {
    category: 'Lunch',
    items: [
      { name: 'Calamari Fritti', desc: 'Crispy fried squid with marinara sauce', price: '$12', img: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400' },
      { name: 'Grilled Salmon', desc: 'Atlantic salmon with lemon butter sauce', price: '$24', img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400' },
      { name: 'Caesar Salad', desc: 'Romaine, croutons, parmesan, caesar dressing', price: '$13', img: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400' },
      { name: 'Beef Tenderloin', desc: 'Pan-seared with red wine reduction', price: '$32', img: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400' },
    ],
  },
  {
    category: 'Dinner',
    items: [
      { name: 'Tiramisu', desc: 'Classic Italian coffee dessert', price: '$9', img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400' },
      { name: 'Panna Cotta', desc: 'Vanilla cream with berry coulis', price: '$8', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400' },
      { name: 'Cannoli', desc: 'Crispy shells filled with sweet ricotta', price: '$7', img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400' },
      { name: 'Lobster Bisque', desc: 'Creamy lobster soup with fresh herbs', price: '$18', img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400' },
    ],
  },
]

export default function MenuCard({ name, desc, price, img }) {
  return (
    <div className="flex items-center gap-4 p-4 border-b border-gray-100 hover:bg-amber-50 transition group">
      <img src={img} alt={name} className="w-20 h-20 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform" loading="lazy" />
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-stone-800 text-base">{name}</h3>
        <p className="text-gray-500 text-sm mt-1 truncate">{desc}</p>
      </div>
      <div className="flex flex-col items-end gap-2 shrink-0">
        <span className="text-amber-500 font-bold text-lg">{price}</span>
        <button className="bg-amber-500 hover:bg-amber-600 text-black text-xs font-semibold px-3 py-1 rounded transition">
          Order
        </button>
      </div>
    </div>
  )
}
