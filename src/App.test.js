import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


afterEach(cleanup);

// 1)
import App from './App';
test("Verifica che il componente Welcome venga montato correttamente.", () => {
    render(<App />);

    const welcomeAlert = screen.getByRole('alert');
    const welcome = screen.getByText(/benvenuto/i);

    expect(welcomeAlert).toBeInTheDocument;
    expect(welcome).toBeInTheDocument;

});



//2.  
import fantasy from './books/fantasy.json';
import history from './books/history.json';
import horror from './books/horror.json';
import romance from './books/romance.json';
import scifi from './books/scifi.json';

test("Verifica che vengano effettivamente renderizzate tante bootstrap cards quanti sono i libri nel file json utilizzato.", () => {
    const { container } = render(<App />);

    //----- fantasy
    const fantasyBtn = screen.getByRole('button', { name: /fantasy/i });
    expect(fantasyBtn).toBeInTheDocument;

    fireEvent.click(fantasyBtn);
    const fantasyCard = container.querySelectorAll('.card');
    expect(fantasyCard).toHaveLength(fantasy.length);

    //----- history
    const historyBtn = screen.getByRole('button', { name: /history/i });
    expect(historyBtn).toBeInTheDocument;

    fireEvent.click(historyBtn);
    const historyCard = container.querySelectorAll('.card');
    expect(historyCard).toHaveLength(history.length);

    //----- horror
    const horroryBtn = screen.getByRole('button', { name: /horror/i });
    expect(horroryBtn).toBeInTheDocument;

    fireEvent.click(horroryBtn);
    const horrorCard = container.querySelectorAll('.card');
    expect(horrorCard).toHaveLength(horror.length);

    //----- romance
    const romanceBtn = screen.getByRole('button', { name: /romance/i });
    expect(romanceBtn).toBeInTheDocument;

    fireEvent.click(romanceBtn);
    const romanceCard = container.querySelectorAll('.card');
    expect(romanceCard).toHaveLength(romance.length);

    //----- scifi
    const scifiBtn = screen.getByRole('button', { name: /scifi/i });
    expect(scifiBtn).toBeInTheDocument;

    fireEvent.click(scifiBtn);
    const scifiCard = container.querySelectorAll('.card');
    expect(scifiCard).toHaveLength(scifi.length);

});



//3.
import CommentsArea from './Components/SingleBookComponents/CommentArea';
const asinExample = '0316438960';

test(" Verifica che il componente CommenteArea venga renderizzato correttamente.", () => {
    render(<CommentsArea asin={asinExample} />);

    const comment = screen.getByPlaceholderText(/commenta../i);
    expect(comment).toBeInTheDocument;
});



//4. 
test("Verifica, magari con più test, che il filtraggio dei libri tramite navbar si comporti come  previsto.", () => {
    render(<App />);

    const srcInput = screen.getByPlaceholderText(/cerca../i);
    fireEvent.change(srcInput, { target: { value: "the last" } });

    const filtereBooks_1 = screen.queryAllByRole("img");
    expect(filtereBooks_1).toHaveLength(2);

    const result_1 = screen.getByText(/The Last Wish: Introducing the Witcher/i);
    expect(result_1).toBeInTheDocument;
    const result_2 = screen.getByText(/The Last Wish \(The Witcher Series, Book 1\)/i);
    expect(result_2).toBeInTheDocument;

    const filtereBooks_2 = screen.queryAllByRole("img");
    expect(filtereBooks_2).toHaveLength(2);

    fireEvent.change(srcInput, { target: { value: "Waterdeep " } });
    const result_3 = screen.getByText(/D&D Waterdeep Dragon Heist HC \(Dungeons & Dragons\)/i);
    expect(result_3).toBeInTheDocument;

});



//5. 
test("Verifica che, cliccando su un libro, il suo bordo cambi colore.", () => {
    render(<App />)

    const card = screen.getByRole('img', { name: /copertina 0316438960/i })
    expect(card).not.toHaveClass('selected');

    fireEvent.click(card);
    expect(card).toHaveClass('selected');

    fireEvent.click(card);
    expect(card).not.toHaveClass('selected');
})




//6. 
test("Verifica che, cliccando su un secondo libro dopo il primo, il bordo del primo libro ritorni normale.", () => {
    render(<App />)
    const card_1 = screen.getByRole('img', { name: /copertina 0316438960/i })
    const card_2 = screen.getByRole('img', { name: /copertina 0786966246/i })

    fireEvent.click(card_1);
    expect(card_1).toHaveClass('selected');
    expect(card_2).not.toHaveClass('selected');

    fireEvent.click(card_2);
    expect(card_2).toHaveClass('selected');
    expect(card_1).not.toHaveClass('selected');

});



//7. 
test("Verifica che all'avvio della pagina, senza aver cliccato ancora su nessun libro, non ci siano istanze del componente SingleComment all'interno del Dom.", () => {
    render(<App />);

    const detailesBtn = screen.queryAllByRole('button', { name: /dettagli/i });
    expect(detailesBtn).not.toBeInTheDocument

});

//8. 
global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([
        { id: 1, name: 'John Doe' },  // Dati utente mockati
        { id: 2, name: 'Jane Doe' },
        // Aggiungi altri utenti qui se necessario
      ]),
    })
  );
test("Verifica infine che, cliccando su di un libro con recensioni, esse vengano caricate correttamente all'interno del DOM.",
    async () => {
        render(<CommentsArea asin={asinExample} />);

        
    })