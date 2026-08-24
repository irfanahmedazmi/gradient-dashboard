fetch('./data/customers.json')
  .then(response => response.json())
  .then(customers => {

    const app = document.getElementById('app');

    let html = '<h2>Customers</h2>';

    customers.forEach(customer => {
      html += `
        <div style="
          padding:15px;
          margin:10px 0;
          background:#12213b;
          border-radius:8px;
          cursor:pointer;
        ">
          ${customer.name}
        </div>
      `;
    });

    app.innerHTML = html;

  });
