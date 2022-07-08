<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexVueController extends AbstractController
{
    /**
     * @Route("/{vueRouting}", name="app_index_vue")
     * @return Response
     */
    public function index(): Response
    {
        return $this->render('base.html.twig', []);
    }
}
