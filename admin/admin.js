const LOGIN_KEY='shopland_admin_login';
const user='admin',pass='shopland2026';
const login=$('#login'),dash=$('#dashboard');
function $(s){return document.querySelector(s)}
function render(){
 const orders=JSON.parse(localStorage.getItem('shopland_orders')||'[]');
 $('#total').textContent=orders.length;$('#newCount').textContent=orders.length;
 $('#orders').innerHTML=orders.map(o=>`<tr><td>${esc(o.name)}</td><td>${esc(o.title||'-')}</td><td>${esc(o.type)}</td><td>${esc(o.budget||'-')}</td><td>${esc(o.contact)}</td><td>${esc(o.date)}</td></tr>`).join('');
 $('#empty').style.display=orders.length?'none':'block';
}
function esc(v){return String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function show(){login.style.display='none';dash.style.display='flex';render()}
if(sessionStorage.getItem(LOGIN_KEY)==='1')show();
$('#loginBtn').onclick=()=>{if($('#user').value===user&&$('#pass').value===pass){sessionStorage.setItem(LOGIN_KEY,'1');show()}else $('#loginMsg').textContent='نام کاربری یا رمز عبور اشتباه است.'};
$('#logout').onclick=()=>{sessionStorage.removeItem(LOGIN_KEY);location.reload()};
$('#clear').onclick=()=>{if(confirm('همه سفارش‌ها حذف شوند؟')){localStorage.removeItem('shopland_orders');render()}};
