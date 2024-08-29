import React from 'react';
import './PreDiagnosticoPage.module.css'; // Se estiver usando CSS Modules

const PreDiagnosticoPage: React.FC = () => {
    return (
        <div>
            <header>
                <div className="logo"></div>
                <nav>
                    <a href="#" className="diagnostic-link">Diagnóstico</a>
                </nav>
            </header>

            <main>
                <h1 className="title">Pré Diagnóstico</h1>
                <p className="subtitle">A nossa IA preparou um pré diagnóstico de acordo com suas seleções no formulário prévio</p>

                <section className="diagnostic-box">
                    <p><strong>Possíveis problemas:</strong> Desgaste das pastilhas de freio</p>
                    <p><strong>Checar:</strong> Pastilhas de freio</p>
                    <p><strong>Tempo de reparo:</strong> 2h</p>
                    <p><strong>Custo:</strong> R$ 150,90</p>
                    <p><strong>Necessidade de troca de peças?</strong> Sim</p>
                    <p><strong>Gravidade do problema:</strong> Baixa</p>
                </section>

                <div className="action-buttons">
                    <button className="button" onClick={() => reservarPecas()}>Reservar peças</button>
                    <a href="#" className="menu-link">Voltar ao menu</a>
                </div>
            </main>
        </div>
    );
};

const reservarPecas = () => {
    // Redirecionar para a página de reserva de peças
    window.location.href = "/cp html/reserva de pecas/index.html";
};

export default PreDiagnosticoPage;
