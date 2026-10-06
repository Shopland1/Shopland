const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);

$('#menuBtn')?.addEventListener('click',()=>$('#navLinks').classList.toggle('open'));

$$('.filters button').forEach(btn=>btn.addEventListener('click',()=>{
  $$('.filters button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  const f=btn.dataset.filter;
  $$('.work').forEach(w=>w.style.display=f==='all'||w.dataset.cat===f?'block':'none');
}));

$('#orderForm')?.addEventListener('submit',e=>{
 e.preventDefault();
 const form=e.target, data=Object.fromEntries(new FormData(form).entries());
 const orders=JSON.parse(localStorage.getItem('shopland_orders')||'[]');
 data.id=Date.now();data.date=new Date().toLocaleString('fa-IR');
 orders.unshift(data);localStorage.setItem('shopland_orders',JSON.stringify(orders));
 $('#orderMsg').textContent='درخواست پروژه با موفقیت ثبت شد. تیم شاپ‌لند به‌زودی با شما تماس می‌گیرد 💜';
 $('#orderMsg').classList.add('ok');form.reset();
});