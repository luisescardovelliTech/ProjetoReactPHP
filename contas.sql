-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 15/05/2025 às 18:04
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `contas`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `categoria`
--

CREATE TABLE `categoria` (
  `idcategoria` int(10) UNSIGNED NOT NULL,
  `usuarios_idUsuarios` int(10) UNSIGNED NOT NULL,
  `nomeCategoria` varchar(30) DEFAULT NULL,
  `tipo` enum('entrada','saida') NOT NULL,
  `descricao` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `movimentacao`
--

CREATE TABLE `movimentacao` (
  `idMovimentacao` int(10) UNSIGNED NOT NULL,
  `categoria_idcategoria` int(10) UNSIGNED NOT NULL,
  `usuarios_idUsuarios` int(10) UNSIGNED NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `descricao` text DEFAULT NULL,
  `dataMovimentacao` date NOT NULL,
  `dataCriacao` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuarios` int(10) UNSIGNED NOT NULL,
  `nome` varchar(45) NOT NULL,
  `email` varchar(50) NOT NULL,
  `senha` varchar(20) NOT NULL,
  `data_criacao` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`idcategoria`),
  ADD KEY `categoria_FKIndex1` (`usuarios_idUsuarios`);

--
-- Índices de tabela `movimentacao`
--
ALTER TABLE `movimentacao`
  ADD PRIMARY KEY (`idMovimentacao`),
  ADD KEY `Movimentacao_FKIndex1` (`usuarios_idUsuarios`),
  ADD KEY `Movimentacao_FKIndex2` (`categoria_idcategoria`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuarios`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `categoria`
--
ALTER TABLE `categoria`
  MODIFY `idcategoria` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `movimentacao`
--
ALTER TABLE `movimentacao`
  MODIFY `idMovimentacao` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuarios` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `categoria`
--
ALTER TABLE `categoria`
  ADD CONSTRAINT `categoria_ibfk_1` FOREIGN KEY (`usuarios_idUsuarios`) REFERENCES `usuarios` (`idUsuarios`);

--
-- Restrições para tabelas `movimentacao`
--
ALTER TABLE `movimentacao`
  ADD CONSTRAINT `movimentacao_ibfk_1` FOREIGN KEY (`usuarios_idUsuarios`) REFERENCES `usuarios` (`idUsuarios`),
  ADD CONSTRAINT `movimentacao_ibfk_2` FOREIGN KEY (`categoria_idcategoria`) REFERENCES `categoria` (`idcategoria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
