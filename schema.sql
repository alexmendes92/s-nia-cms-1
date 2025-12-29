-- schema.sql

-- 1. Tabela de Configurações Gerais (Armazena apenas 1 linha)
DROP TABLE IF EXISTS site_config;
CREATE TABLE site_config (
    id INTEGER PRIMARY KEY DEFAULT 1,
    ownerName TEXT,
    professionTitle TEXT,
    heroBio TEXT,
    whatsapp TEXT,
    primaryColor TEXT
);

-- 2. Tabela de Serviços
DROP TABLE IF EXISTS services;
CREATE TABLE services (
    id TEXT PRIMARY KEY,
    title TEXT,
    desc TEXT,
    icon TEXT,
    img TEXT,
    category TEXT
);

-- 3. Inserir Dados Padrão (Baseado no seu App.tsx)
INSERT INTO site_config (id, ownerName, professionTitle, heroBio, whatsapp, primaryColor)
VALUES (1, 'Sônia Andrade', 'Psicanalista e Psicopedagoga', 'Um espaço de acolhimento e escuta qualificada. Como especialista em desenvolvimento humano, estou pronta para te ajudar a florescer.', '5521992717217', 'pink');

-- 4. Inserir Serviços Iniciais
INSERT INTO services (id, title, desc, icon, img, category) VALUES 
('psicanalise', 'Psicanálise Clínica', 'Um mergulho no inconsciente para compreender os conflitos com as angústias, traumas e padrões de repetição.', 'psychology_alt', 'https://santanamendes.com.br/Sonia/Sonia_d0_img1.png', 'emotional'),
('psicopedagogia', 'Psicopedagogia', 'Avaliação e intervenção nas dificuldades de aprendizagem e barreiras cognitivas.', 'extension', 'https://santanamendes.com.br/Sonia/Sonia_d0_img2.png', 'learning'),
('irlen', 'Síndrome de Irlen', 'Rastreio de estresse visual e distorções na leitura com aplicação de filtros.', 'visibility', 'https://santanamendes.com.br/Sonia/Sonia_d0_img8.png', 'focus'),
('carreira', 'Orientação Profissional', 'Auxílio na escolha da primeira carreira ou transição profissional para adultos.', 'explore', 'https://santanamendes.com.br/Sonia/Sonia_d3_img0.png', 'career');